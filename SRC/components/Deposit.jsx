import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export default function Deposit() {
  const [ibanAmount, setIbanAmount] = useState("");
  const [ibanName, setIbanName] = useState("");
  const [paparaName, setPaparaName] = useState("");
  const [paparaAmount, setPaparaAmount] = useState("");
  const [cryptoAmount, setCryptoAmount] = useState("");
  const [cryptoWallet, setCryptoWallet] = useState("");

  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Para Yatırma</h2>
        <Tabs defaultValue="iban">
          <TabsList>
            <TabsTrigger value="iban">IBAN ile</TabsTrigger>
            <TabsTrigger value="papara">Papara</TabsTrigger>
            <TabsTrigger value="kripto">Kripto</TabsTrigger>
          </TabsList>

          <TabsContent value="iban">
            <div className="space-y-2">
              <p>Banka: Örnek Banka</p>
              <p>Alıcı: Demo Şirket</p>
              <p>IBAN: TR00 0000 0000 0000 0000 0000 00</p>
              <Input
                placeholder="Gönderilen Tutar"
                value={ibanAmount}
                onChange={(e) => setIbanAmount(e.target.value)}
              />
              <Input
                placeholder="Ad Soyad"
                value={ibanName}
                onChange={(e) => setIbanName(e.target.value)}
              />
              <Textarea placeholder="Açıklama (opsiyonel)" />
              <Button>Para Yatırma Bildir</Button>
            </div>
          </TabsContent>

          <TabsContent value="papara">
            <div className="space-y-2">
              <p>Papara No: 1234567890</p>
              <Input
                placeholder="Ad Soyad"
                value={paparaName}
                onChange={(e) => setPaparaName(e.target.value)}
              />
              <Input
                placeholder="Tutar"
                value={paparaAmount}
                onChange={(e) => setPaparaAmount(e.target.value)}
              />
              <Button>Para Yatırma Bildir</Button>
            </div>
          </TabsContent>

          <TabsContent value="kripto">
            <div className="space-y-2">
              <p>USDT (TRC20) Adresi:</p>
              <p className="break-all">TX1234567890ABCDEF1234567890ABCDEF</p>
              <Input
                placeholder="Tutar"
                value={cryptoAmount}
                onChange={(e) => setCryptoAmount(e.target.value)}
              />
              <Input
                placeholder="Cüzdan Adresi"
                value={cryptoWallet}
                onChange={(e) => setCryptoWallet(e.target.value)}
              />
              <Button>Para Yatırma Bildir</Button>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
