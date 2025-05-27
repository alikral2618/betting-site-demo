import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function Wallet({ balance, setBalance }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Cüzdan</h2>
        <p>Bakiyeniz: <strong>{balance} TL</strong></p>
        <Button onClick={() => setBalance(balance + 50)}>50 TL Test Bakiyesi Yükle</Button>
      </CardContent>
    </Card>
  );
}
