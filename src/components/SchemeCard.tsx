import { Scheme, schemeTypes } from '@/data/schemes';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Phone, CheckCircle } from 'lucide-react';

interface SchemeCardProps {
  scheme: Scheme;
  expanded?: boolean;
  onToggle?: () => void;
}

export function SchemeCard({ scheme, expanded, onToggle }: SchemeCardProps) {
  const schemeType = schemeTypes.find(t => t.id === scheme.type);

  return (
    <Card className="overflow-hidden transition-all duration-300 hover:shadow-card">
      <CardHeader className="pb-3">
        <div className="flex items-start justify-between gap-4">
          <div className="flex-1">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{schemeType?.icon}</span>
              <Badge className={schemeType?.color} variant="outline">
                {schemeType?.name}
              </Badge>
            </div>
            <h3 className="font-semibold text-foreground leading-tight">
              {scheme.name}
            </h3>
            <p className="text-sm text-muted-foreground mt-1">{scheme.nameKannada}</p>
          </div>
          <Badge className="bg-primary/10 text-primary border-primary/20 whitespace-nowrap">
            {scheme.subsidy}
          </Badge>
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-sm text-muted-foreground">{scheme.description}</p>
        
        {/* Benefits */}
        <div>
          <h4 className="text-sm font-medium text-foreground mb-2">Key Benefits</h4>
          <ul className="space-y-1.5">
            {scheme.benefits.slice(0, expanded ? undefined : 3).map((benefit, index) => (
              <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                <CheckCircle className="h-4 w-4 text-primary mt-0.5 shrink-0" />
                <span>{benefit}</span>
              </li>
            ))}
          </ul>
        </div>

        {expanded && (
          <>
            {/* Eligibility */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Eligibility</h4>
              <ul className="space-y-1.5">
                {scheme.eligibility.map((item, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="text-primary">•</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* How to Apply */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">How to Apply</h4>
              <ol className="space-y-1.5">
                {scheme.howToApply.map((step, index) => (
                  <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="bg-primary text-primary-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs shrink-0">
                      {index + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Documents */}
            <div>
              <h4 className="text-sm font-medium text-foreground mb-2">Required Documents</h4>
              <div className="flex flex-wrap gap-1.5">
                {scheme.documents.map((doc, index) => (
                  <Badge key={index} variant="secondary" className="text-xs font-normal">
                    {doc}
                  </Badge>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Actions */}
        <div className="flex flex-wrap gap-2 pt-2">
          <Button variant="outline" size="sm" onClick={onToggle}>
            {expanded ? 'Show Less' : 'View Details'}
          </Button>
          <a href={`tel:${scheme.helpline}`}>
            <Button variant="outline" size="sm">
              <Phone className="h-4 w-4 mr-1" />
              {scheme.helpline}
            </Button>
          </a>
          <a href={scheme.website} target="_blank" rel="noopener noreferrer">
            <Button size="sm" className="bg-primary hover:bg-primary/90">
              <ExternalLink className="h-4 w-4 mr-1" />
              Apply Online
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
}
