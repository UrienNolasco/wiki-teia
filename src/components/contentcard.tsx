import { Button } from "./ui/button";
import { Card, CardContent, CardFooter, CardTitle } from "./ui/card";
import { Progress } from "./ui/progress";

export function ContentCard() {
  return (
    <Card>
      <div className="p-6 space-y-6">
        <CardTitle className="uppercase text-xl text-center mb-4">
          Continue de onde parou: Formação .... Conteúdo ...
        </CardTitle>
        <CardContent>
          <Card>
            <CardTitle className="text-lg uppercase text-center">
              Último vídeo acessado
            </CardTitle>
            <CardContent>
              <Progress value={50} className="h-[15px] bg-pink-200" />
            </CardContent>
          </Card>
        </CardContent>
        <CardFooter className="flex justify-between px-4">
          <Button className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold mr-2">
            Acessar Conteúdo
          </Button>
          <Button className="uppercase bg-pink-500 hover:bg-pink-600 transition-colors font-semibold ml-2">
            Acessar Vídeo
          </Button>
        </CardFooter>
      </div>
    </Card>
  );
}
