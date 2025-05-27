import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function SlotMachine({ balance, setBalance }) {
  const [slotResult, setSlotResult] = useState(["-", "-", "-"]);
  const [isSpinning, setIsSpinning] = useState(false);

  const handleSlotPlay = () => {
    const symbols = ["🍒", "🍋", "🔔", "⭐", "⿧"];
    setIsSpinning(true);
    let counter = 0;
    const interval = setInterval(() => {
      setSlotResult([
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)],
        symbols[Math.floor(Math.random() * symbols.length)]
      ]);
      counter++;
      if (counter >= 15) {
        clearInterval(interval);
        const finalResult = [
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)],
          symbols[Math.floor(Math.random() * symbols.length)]
        ];
        setSlotResult(finalResult);
        setIsSpinning(false);
        if (finalResult[0] === finalResult[1] && finalResult[1] === finalResult[2]) {
          setBalance(balance + 100);
          alert("Tebrikler! Kazandınız +100 TL");
        } else {
          alert("Kaybettiniz. Tekrar deneyin!");
        }
      }
    }, 100);
  };

  return (
    <Card>
      <CardContent className="p-4 space-y-2 text-center">
        <h2 className="text-xl font-semibold">Slot Oyunu (Demo)</h2>
        <p>3 aynı sembolü tuttur, 100 TL kazan!</p>
        <div className="text-4xl font-bold flex justify-center gap-4">
          {slotResult.map((symbol, idx) => (
            <motion.div
              key={idx}
              animate={{ rotate: isSpinning ? 360 : 0 }}
              transition={{ repeat: isSpinning ? Infinity : 0, duration: 0.4 }}
            >
              {symbol}
            </motion.div>
          ))}
        </div>
        <Button onClick={handleSlotPlay} disabled={isSpinning} className="mt-2">
          {isSpinning ? "Çeviriliyor..." : "Slot Çevir"}
        </Button>
      </CardContent>
    </Card>
  );
}
