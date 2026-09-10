import { SuccessStory } from '@/data/stories';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { MapPin, Droplets, TrendingUp, Quote } from 'lucide-react';

interface StoryCardProps {
  story: SuccessStory;
  expanded?: boolean;
  onToggle?: () => void;
}

export function StoryCard({ story, expanded, onToggle }: StoryCardProps) {
  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-start gap-4">
          <div className="text-5xl">{story.image}</div>
          <div className="flex-1">
            <h3 className="font-semibold text-foreground text-lg leading-tight">
              {story.title}
            </h3>
            <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
              <span className="font-medium text-foreground">{story.farmerName}</span>
              <span>•</span>
              <div className="flex items-center gap-1">
                <MapPin className="h-3.5 w-3.5" />
                {story.village}, {story.taluk}
              </div>
            </div>
            <div className="flex gap-2 mt-3">
              <Badge className="bg-blue-100 text-blue-800 border-blue-200" variant="outline">
                <Droplets className="h-3 w-3 mr-1" />
                {story.waterSaved} water saved
              </Badge>
              <Badge className="bg-green-100 text-green-800 border-green-200" variant="outline">
                <TrendingUp className="h-3 w-3 mr-1" />
                {story.incomeIncrease} income ↑
              </Badge>
            </div>
          </div>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{story.summary}</p>

        {/* Crop Change */}
        <div className="flex items-center gap-3 p-3 bg-muted/50 rounded-lg">
          <div className="text-center flex-1">
            <p className="text-xs text-muted-foreground">Before</p>
            <p className="font-medium text-destructive">{story.cropChanged.from}</p>
          </div>
          <div className="text-2xl">→</div>
          <div className="text-center flex-1">
            <p className="text-xs text-muted-foreground">After</p>
            <p className="font-medium text-primary">{story.cropChanged.to}</p>
          </div>
        </div>

        {expanded && (
          <>
            {/* Challenge */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">The Challenge</h4>
              <p className="text-sm text-muted-foreground">{story.challenge}</p>
            </div>

            {/* Solution */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">The Solution</h4>
              <p className="text-sm text-muted-foreground">{story.solution}</p>
            </div>

            {/* Results */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Results Achieved</h4>
              <ul className="grid grid-cols-2 gap-2">
                {story.results.map((result, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">✓</span>
                    <span>{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          </>
        )}

        {/* Quote */}
        <div className="relative p-4 bg-primary/5 rounded-lg border-l-4 border-primary">
          <Quote className="absolute top-2 left-2 h-4 w-4 text-primary/30" />
          <p className="text-sm italic text-foreground pl-4">"{story.quote}"</p>
          <p className="text-xs text-muted-foreground mt-2 pl-4">— {story.farmerName}, {story.year}</p>
        </div>

        <button 
          onClick={onToggle}
          className="text-sm font-medium text-primary hover:underline"
        >
          {expanded ? 'Show less' : 'Read full story →'}
        </button>
      </CardContent>
    </Card>
  );
}
