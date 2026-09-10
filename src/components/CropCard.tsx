import { Crop } from '@/data/crops';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Droplets, Calendar, TrendingUp, IndianRupee } from 'lucide-react';

interface CropCardProps {
  crop: Crop;
  onClick?: () => void;
}

const waterColors = {
  'very-low': 'bg-green-100 text-green-800 border-green-200',
  'low': 'bg-blue-100 text-blue-800 border-blue-200',
  'medium': 'bg-amber-100 text-amber-800 border-amber-200',
};

export function CropCard({ crop, onClick }: CropCardProps) {
  return (
    <Card 
      className="group cursor-pointer overflow-hidden transition-all duration-300 hover:shadow-card hover:-translate-y-1"
      onClick={onClick}
    >
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <span className="text-4xl">{crop.image}</span>
            <div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                {crop.name}
              </h3>
              <p className="text-sm text-muted-foreground">{crop.nameKannada}</p>
            </div>
          </div>
          <Badge className={waterColors[crop.waterRequirement]} variant="outline">
            💧 {crop.waterSavings} saved
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Calendar className="h-4 w-4 text-primary" />
            <span>{crop.growingSeason}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <Droplets className="h-4 w-4 text-primary" />
            <span>{crop.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <TrendingUp className="h-4 w-4 text-primary" />
            <span>{crop.expectedYield}</span>
          </div>
          <div className="flex items-center gap-2 text-muted-foreground">
            <IndianRupee className="h-4 w-4 text-primary" />
            <span className="truncate">{crop.marketPrice}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-1.5">
          {crop.benefits.slice(0, 3).map((benefit, index) => (
            <Badge key={index} variant="secondary" className="text-xs font-normal">
              {benefit}
            </Badge>
          ))}
          {crop.benefits.length > 3 && (
            <Badge variant="secondary" className="text-xs font-normal">
              +{crop.benefits.length - 3} more
            </Badge>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
