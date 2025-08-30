import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  MapPin,
  Clock,
  Star,
  QrCode
} from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { actionCards, upcomingEvents } from "@/reusables/data";

const GetInvolved = () => {
  return (
      <section
          id="get-involved"
          className="py-20 bg-gradient-to-br from-muted/30 to-background"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="slide-in-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                🚀 <span className="gradient-text">Get Involved</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Ready to turn plastic into art and make a real difference? Here are three powerful
                ways to join our movement and create lasting environmental change.
              </p>
            </div>
          </div>

          {/* Action Cards */}
          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {actionCards.map((card, index) => {
              const Icon = card.icon;
              return (
                  <Card
                      key={index}
                      className={`${card.delay} card-hover overflow-hidden relative`}
                  >
                    <div
                        className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-5`}
                    />
                    <CardHeader className="text-center relative z-10">
                      <div className="text-primary mb-4 mx-auto">
                        <Icon className="w-12 h-12" />
                      </div>
                      <CardTitle className="text-2xl font-bold">{card.title}</CardTitle>
                    </CardHeader>
                    <CardContent className="relative z-10">
                      <p className="text-muted-foreground mb-6 text-center">
                        {card.description}
                      </p>
                      <ul className="space-y-2 mb-6">
                        {card.features.map((feature, i) => (
                            <li key={i} className="flex items-start text-sm">
                              <Star className="w-4 h-4 text-accent-yellow mr-2 mt-0.5 flex-shrink-0" />
                              {feature}
                            </li>
                        ))}
                      </ul>
                      <Button
                          className={`w-full bg-gradient-to-r ${card.color} text-white btn-hover-lift shadow-md`}
                          size="lg"
                      >
                        {card.cta}
                      </Button>
                    </CardContent>
                  </Card>
              );
            })}
          </div>

          {/* Upcoming Events */}
          <div className="slide-in-left stagger-4 mb-16">
            <h3 className="text-3xl font-bold mb-6 flex items-center">
              <Calendar className="w-8 h-8 text-primary mr-3" />
              Upcoming Events
            </h3>

            <div className="space-y-4">
              {upcomingEvents.length > 0 ? (
                  upcomingEvents.map((event, index) => (
                      <Card
                          key={index}
                          className="card-hover border-l-4 border-l-primary"
                      >
                        <CardContent className="p-4">
                          <div className="flex items-start justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-4 mb-2">
                                <div className="bg-primary text-white px-3 py-1 rounded-full text-sm font-bold">
                                  {event.date}
                                </div>
                                <h4 className="font-semibold">{event.title}</h4>
                              </div>
                              <div className="space-y-1 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-2" />
                                  {event.location}
                                </div>
                                <div className="flex items-center">
                                  <Clock className="w-4 h-4 mr-2" />
                                  {event.time}
                                </div>
                              </div>
                            </div>
                            <div className="text-right">
                              <div className="text-xs text-accent-coral font-medium mb-2">
                                {event.spots}
                              </div>
                              <Button size="sm" variant="outline">
                                Register
                              </Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                  ))
              ) : (
                  <p className="text-muted-foreground italic text-center py-6">
                    🚫 No upcoming events at the moment. Stay tuned!
                  </p>
              )}
            </div>

            {upcomingEvents.length > 0 && (
                <Button className="w-full mt-4 bg-gradient-secondary" size="lg">
                  View All Events
                </Button>
            )}
          </div>

          {/* Final CTA */}
          <div className="text-center mt-16">
            <div className="slide-in-up stagger-5 max-w-2xl mx-auto">
              <h3 className="text-3xl font-bold mb-4">
                Ready to <span className="gradient-text">ReImagine</span> the Future?
              </h3>
              <p className="text-lg text-muted-foreground mb-8">
                Every piece of plastic you transform, every youth you inspire, every community
                you engage brings us closer to a cleaner, more creative world.
              </p>

              {/* WhatsApp Join Button with QR Modal */}
              <Dialog>
                <DialogTrigger asChild>
                  <Button className="bg-gradient-coral text-white btn-hover-lift" size="lg">
                    Join Our WhatsApp Community
                  </Button>
                </DialogTrigger>
                <DialogContent className="max-w-md text-center">
                  <DialogHeader>
                    <DialogTitle>📱 Scan to Join Our Community</DialogTitle>
                  </DialogHeader>
                  <div className="p-4 bg-white rounded-lg shadow-md inline-block mx-auto">
                    <QrCode className="w-40 h-40 text-primary animate-pulse-glow" />
                  </div>
                  <p className="text-sm text-muted-foreground mt-4">
                    Open your camera and scan the QR code to join instantly!
                  </p>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      </section>
  );
};

export default GetInvolved;
