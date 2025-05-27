import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function AdminPanel() {
  return (
    <Card>
      <CardContent className="p-4 space-y-4">
        <h2 className="text-xl font-semibold">Admin Paneli</h2>
        <p>Son para yatırma talepleri:</p>
        <ul className="list-disc pl-5">
          <li>Ali Y. - 100 TL - IBAN - Onay Bekliyor</li>
          <li>Ayşe K. - 250 TL - Papara - Onaylandı</li>
        </ul>
        <Button>Yeni Talepleri Gör</Button>
      </CardContent>
    </Card>
  );
}
