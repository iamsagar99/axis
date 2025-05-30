import { Card, CardContent, CardFooter } from "./ui/card"
import { Button } from "./ui/button"
import { ArrowRight, ArrowUpRight } from "lucide-react"

const Portfolio = ({ portfolios }) => {
  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Success Stories</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            See how we've helped businesses like yours achieve remarkable results through strategic digital marketing.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {portfolios.map((portfolio) => (
            <Card key={portfolio.id} className="overflow-hidden group">
              <div className="relative overflow-hidden h-48 sm:h-52 md:h-60">
                <img
                  src={portfolio.image_url || `/placeholder.svg?height=240&width=400&text=${portfolio.title}`}
                  alt={portfolio.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{portfolio.title}</h3>
                    <p className="text-sm text-white/80">{portfolio.client_name}</p>
                  </div>
                </div>
              </div>
              <CardContent className="pt-6">
                <h3 className="font-bold text-xl mb-2">{portfolio.title}</h3>
                <p className="text-sm text-muted-foreground mb-4">{portfolio.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-4">
                  <div>
                    <h4 className="text-xs uppercase text-muted-foreground font-semibold mb-1">Before</h4>
                    <p className="text-sm">{portfolio.before_stats}</p>
                  </div>
                  <div>
                    <h4 className="text-xs uppercase text-muted-foreground font-semibold mb-1">After</h4>
                    <p className="text-sm text-primary font-medium">{portfolio.after_stats}</p>
                  </div>
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto group-hover:text-primary">
                  View case study <ArrowUpRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button variant="outline" size="lg" className="gap-2">
            View All Case Studies <ArrowRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}

export default Portfolio
