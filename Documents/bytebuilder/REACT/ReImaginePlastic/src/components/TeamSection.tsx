import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Instagram, Twitter, Linkedin, Mail, MapPin } from "lucide-react";
import { teamMembers } from "@/reusables/data.ts";

const TeamSection = () => {
  const [showPositions, setShowPositions] = useState(false);

  return (
      <section
          id="team"
          className="py-20 bg-gradient-to-br from-background via-muted/20 to-background"
      >
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="slide-in-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                Meet Our <span className="gradient-text">Dream Team</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Passionate changemakers, educators, and innovators working together
                to empower the next generation of environmental leaders.
              </p>
            </div>
          </div>

          {/* Team Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
                <Dialog key={member.id}>
                  <DialogTrigger asChild>
                    <Card
                        className={`group cursor-pointer card-hover slide-in-up stagger-${
                            (index % 3) + 1
                        } overflow-hidden transition-transform hover:scale-105 hover:shadow-xl`}
                    >
                      <div className="relative">
                        {/* Profile Image with Hover Effect */}
                        <div className="relative overflow-hidden">
                          <div className="w-32 h-32 mx-auto mt-6 rounded-full overflow-hidden border-4 border-primary group-hover:border-secondary transition-all duration-300 group-hover:scale-110">
                            <img
                                src={member.image}
                                alt={member.name}
                                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                          </div>
                          {/* Animated Border */}
                          <div className="absolute top-6 left-1/2 transform -translate-x-1/2 w-32 h-32 rounded-full border-2 border-accent-coral opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse-glow" />
                        </div>
                      </div>

                      <CardContent className="text-center p-6">
                        <h3 className="text-xl font-bold mb-1 group-hover:text-primary transition-colors">
                          {member.name}
                        </h3>
                        <p className="text-primary font-medium mb-2">
                          {member.title}
                        </p>
                        <div className="flex items-center justify-center text-muted-foreground text-sm mb-3">
                          <MapPin className="w-4 h-4 mr-1" />
                          {member.location}
                        </div>
                        <p className="text-muted-foreground text-sm mb-4">
                          {member.bio}
                        </p>

                        <div className="flex flex-wrap gap-2 justify-center mb-4">
                          {member.expertise.slice(0, 2).map((skill, i) => (
                              <Badge key={i} variant="outline" className="text-xs">
                                {skill}
                              </Badge>
                          ))}
                        </div>

                        <div className="flex justify-center space-x-3 text-muted-foreground">
                          {member.social.instagram && (
                              <a
                                  href={member.social.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                <Instagram className="w-4 h-4 hover:text-accent-coral transition-colors cursor-pointer" />
                              </a>
                          )}
                          {member.social.twitter && (
                              <a
                                  href={member.social.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                <Twitter className="w-4 h-4 hover:text-secondary transition-colors cursor-pointer" />
                              </a>
                          )}
                          {member.social.linkedin && (
                              <a
                                  href={member.social.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                              >
                                <Linkedin className="w-4 h-4 hover:text-primary transition-colors cursor-pointer" />
                              </a>
                          )}
                          {member.social.email && (
                              <a href={`mailto:${member.social.email}`}>
                                <Mail className="w-4 h-4 hover:text-accent-purple transition-colors cursor-pointer" />
                              </a>
                          )}
                        </div>
                      </CardContent>
                    </Card>
                  </DialogTrigger>

                  <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                    <DialogHeader>
                      <div className="flex items-center space-x-4 mb-4">
                        <div className="w-20 h-20 rounded-full overflow-hidden border-4 border-primary">
                          <img
                              src={member.image}
                              alt={member.name}
                              className="w-full h-full object-cover"
                          />
                        </div>
                        <div>
                          <DialogTitle className="text-2xl font-bold">
                            {member.name}
                          </DialogTitle>
                          <p className="text-primary font-medium">{member.title}</p>
                          <div className="flex items-center text-muted-foreground text-sm">
                            <MapPin className="w-4 h-4 mr-1" />
                            {member.location}
                          </div>
                        </div>
                      </div>
                    </DialogHeader>

                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-primary mb-2">About</h4>
                        <p className="text-muted-foreground leading-relaxed">
                          {member.longBio}
                        </p>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">
                          Key Achievements
                        </h4>
                        <ul className="space-y-1">
                          {member.achievements.map((achievement, i) => (
                              <li
                                  key={i}
                                  className="text-muted-foreground flex items-start"
                              >
                                <span className="text-accent-coral mr-2">•</span>
                                {achievement}
                              </li>
                          ))}
                        </ul>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {member.expertise.map((skill, i) => (
                              <Badge key={i} variant="secondary">
                                {skill}
                              </Badge>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-primary mb-2">Connect</h4>
                        <div className="flex flex-col space-y-2">
                          {member.social.instagram && (
                              <a
                                  href={member.social.instagram}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-muted-foreground hover:text-accent-coral transition-colors"
                              >
                                <Instagram className="w-4 h-4 mr-2" /> Instagram
                              </a>
                          )}
                          {member.social.twitter && (
                              <a
                                  href={member.social.twitter}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-muted-foreground hover:text-secondary transition-colors"
                              >
                                <Twitter className="w-4 h-4 mr-2" /> Twitter
                              </a>
                          )}
                          {member.social.linkedin && (
                              <a
                                  href={member.social.linkedin}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex items-center text-muted-foreground hover:text-primary transition-colors"
                              >
                                <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                              </a>
                          )}
                          {member.social.email && (
                              <a
                                  href={`mailto:${member.social.email}`}
                                  className="flex items-center text-muted-foreground hover:text-accent-purple transition-colors"
                              >
                                <Mail className="w-4 h-4 mr-2" /> {member.social.email}
                              </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
            ))}
          </div>

          {/* Join Team CTA */}
          <div className="text-center mt-16">
            <div className="slide-in-up stagger-4 glass p-8 rounded-lg max-w-2xl mx-auto">
              <h3 className="text-2xl font-bold mb-4">Want to Join Our Team?</h3>
              <p className="text-muted-foreground mb-6">
                We're always looking for passionate individuals who share our
                vision of empowering youth to create environmental change through
                art.
              </p>
              <button
                  onClick={() => setShowPositions(!showPositions)}
                  className="bg-gradient-primary text-white px-6 py-3 rounded-lg font-semibold btn-hover-lift"
              >
                View Open Positions
              </button>

              {showPositions && (
                  <div className="mt-4">
                    <Badge variant="destructive" className="uppercase tracking-wide">
                      Actively Not Recruiting
                    </Badge>
                  </div>
              )}
            </div>
          </div>
        </div>
      </section>
  );
};

export default TeamSection;
