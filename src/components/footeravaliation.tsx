import { Star, ThumbsUp } from "lucide-react";
import { Button } from "./ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { useState } from "react";

const FooterAvaliation = () => {
  const [open, setOpen] = useState(false);

  const [rating, setRating] = useState<number>(0);
  const [isEvaluated, setIsEvaluated] = useState(false);

  const handleConfirm = () => {
    setIsEvaluated(true);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="flex-1 gap-2 border-gray-400 hover:border-gray-600"
          onClick={(e) => e.stopPropagation()}
        >
          <ThumbsUp className="h-4 w-4" />
          {isEvaluated ? "Workshop Avaliado" : "Avaliar Workshop"}
        </Button>
      </DialogTrigger>

      <DialogContent className="sm:max-w-[450px] rounded-xl shadow-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="text-xl font-semibold text-gray-800">
            Avalie o Workshop
          </DialogTitle>
        </DialogHeader>

        <div className="flex flex-col items-center justify-center space-y-4 mt-4 fill-current">
          <div className="flex gap-2">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`h-10 w-10 cursor-pointer transition-transform duration-200 fill-current ${
                  rating >= star
                    ? "text-yellow-500"
                    : "text-gray-300 hover:text-yellow-400"
                }`}
                onClick={() => setRating(star)}
              />
            ))}
          </div>

          <Button
            className="w-full bg-green-600 hover:bg-green-700 transition-colors duration-300 rounded-lg py-2 text-white font-medium"
            onClick={(e) => {
              e.stopPropagation();
              handleConfirm();
            }}
          >
            Confirmar Avaliação
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default FooterAvaliation;
