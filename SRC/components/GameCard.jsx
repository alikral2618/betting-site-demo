import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function GameCard({ title, description, onClick, children }) {
  return (
    <Card>
      <CardContent className="p-4 space-y-2">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p>{description}</p>
        {children}
        <Button onClick={onClick}>{children ? null : "Oyna"}</Button>
      </CardContent>
    </Card>
  );
}
