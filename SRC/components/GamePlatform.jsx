import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import GameCard from "../components/GameCard";
import SlotMachine from "../components/SlotMachine";
import Wallet from "../components/Wallet";
import Deposit from "../components/Deposit";
import AdminPanel from "../components/AdminPanel";

export default function GamePlatform() {
  const [balance, setBalance] = useState(0);

  return (
    <div className="p-6 max-w-5xl mx-auto space-y-6">
      <h1 className="text-3xl font-bold text-center">Gerçek Para ile Oynanan Oyun Platformu</h1>

      <Tabs defaultValue="games" className="w-full">
        <TabsList className="grid grid-cols-4">
          <TabsTrigger value="games">Oyunlar</TabsTrigger>
          <TabsTrigger value="wallet">Cüzdan</TabsTrigger>
          <TabsTrigger value="deposit">Para Yatır</TabsTrigger>
          <TabsTrigger value="admin">Admin</TabsTrigger>
        </TabsList>

        <TabsContent value="games">
          <div className="grid md:grid-cols-2 gap-4">
            <GameCard title="Bilgi Yarışması" description="5 soruda en iyi skoru yap, ödülü kap!" />
            <GameCard title="Refleks Testi" description="Tıklama hızını göster, turnuvayı kazan!" />
            <GameCard title="1v1 Okey" description="Rakibinle karşılaş, kazanan parayı alır!" />
            <GameCard title="Tıklama Oyunu" description="30 saniyede en fazla tıklayan kazanır!" />
            <SlotMachine balance={balance} setBalance={setBalance} />
          </div>
        </TabsContent>

        <TabsContent value="wallet">
          <Wallet balance={balance} setBalance={setBalance} />
        </TabsContent>

        <TabsContent value="deposit">
          <Deposit />
        </TabsContent>

        <TabsContent value="admin">
          <AdminPanel />
        </TabsContent>
      </Tabs>
    </div>
  );
}
