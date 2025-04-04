"use client";

import { Rocket, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
import { Button } from "./ui/button";

interface InitialWorkshopProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const InitialWorkshop = ({ open, onOpenChange }: InitialWorkshopProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange} modal={true}>
      <DialogTrigger asChild>
        <DialogContent
          onInteractOutside={(e) => {
            e.preventDefault();
            onOpenChange(false);
          }}
          className="border-0 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 rounded-xl overflow-hidden sm:max-w-[425px] backdrop:bg-black/50"
        >
          {/* Decoração de fundo */}
          <div className="absolute top-0 right-0 h-32 w-32 bg-pink-500/10 blur-[80px]" />

          <div className="space-y-6">
            <DialogTitle className="text-2xl font-bold text-gray-800 dark:text-gray-100 text-center">
              Iniciar Workshop
              <div className="mx-auto mt-2 h-1 w-12 bg-pink-500 rounded-full" />
            </DialogTitle>

            <DialogDescription className="text-center text-gray-500 dark:text-gray-400 leading-relaxed">
              <Rocket className="h-12 w-12 text-pink-500 mx-auto mb-4" />
              <p className="px-4">
                Você está prestes a iniciar uma nova jornada de aprendizagem. Ao
                confirmar, registraremos a data de início do workshop.
              </p>
            </DialogDescription>

            <DialogFooter className="flex flex-col gap-2">
              <Button
                className="w-full transform transition-all duration-300 hover:scale-[1.02] 
                           bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600 
                           text-white shadow-sm hover:shadow-md"
              >
                <Rocket className="h-4 w-4 mr-2" />
                Iniciar Agora
              </Button>

              <Button
                variant="outline"
                className="w-full border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300
                           hover:bg-gray-50 dark:hover:bg-gray-800/50"
              >
                <X className="h-4 w-4 mr-2" />
                Cancelar
              </Button>
            </DialogFooter>
          </div>

          {/* Efeito de borda gradiente */}
          <div className="absolute inset-0 border-2 border-white/10 dark:border-gray-800/50 rounded-xl pointer-events-none" />
        </DialogContent>
      </DialogTrigger>
    </Dialog>
  );
};
export default InitialWorkshop;
