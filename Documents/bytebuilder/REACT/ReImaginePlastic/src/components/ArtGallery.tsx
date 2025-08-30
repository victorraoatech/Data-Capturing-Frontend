import { useState } from "react";
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Filter, Heart, Eye, Share2, ImageOff } from "lucide-react";
import { artworks } from "../reusables/data.ts";
import { filters } from "../reusables/data.ts";

const ArtGallery = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredArtworks =
      activeFilter === "all"
          ? artworks
          : artworks.filter((artwork) => artwork.category === activeFilter);

  return (
      <section id="gallery" className="py-20 bg-gradient-to-br from-background to-muted/30">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="slide-in-up">
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                🎨 <span className="gradient-text">Art Gallery</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Discover incredible artworks created by young environmental artists who transformed
                plastic waste into powerful statements for change.
              </p>
            </div>
          </div>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter, index) => (
                <Button
                    key={filter.id}
                    variant={activeFilter === filter.id ? "default" : "outline"}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`btn-hover-lift slide-in-up stagger-${index + 1} ${
                        activeFilter === filter.id
                            ? "bg-gradient-primary shadow-glow"
                            : "hover:bg-primary/10"
                    }`}
                >
                  <Filter className="w-4 h-4 mr-2" />
                  {filter.label}
                  <Badge variant="secondary" className="ml-2">{filter.count}</Badge>
                </Button>
            ))}
          </div>

          {/* Art Grid or Empty State */}
          {filteredArtworks.length === 0 ? (
              <div className="flex flex-col items-center justify-center py-20 text-center text-muted-foreground">
                <ImageOff className="w-16 h-16 mb-4 text-muted-foreground/70" />
                <h3 className="text-2xl font-bold mb-2">No Art Available</h3>
                <p className="max-w-md">
                  There are currently no artworks in this category. Check back later or try a different filter.
                </p>
              </div>
          ) : (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredArtworks.map((artwork, index) => (
                    <Dialog key={artwork.id}>
                      <DialogTrigger asChild>
                        <Card className={`group cursor-pointer card-hover slide-in-up stagger-${(index % 3) + 1}`}>
                          <div className="relative overflow-hidden rounded-t-lg">
                            <img
                                src={artwork.image}
                                alt={artwork.title}
                                className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute bottom-4 left-4 right-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                              <div className="flex items-center justify-between text-white">
                                <div className="flex items-center space-x-2">
                                  <Heart className="w-5 h-5" />
                                  <span className="font-semibold">{artwork.likes}</span>
                                </div>
                                <Eye className="w-5 h-5" />
                              </div>
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                              {artwork.title}
                            </h3>
                            <p className="text-primary font-medium mb-2">{artwork.artist}</p>
                            <p className="text-muted-foreground text-sm mb-4">{artwork.description}</p>
                            <div className="flex flex-wrap gap-2">
                              {artwork.materials.slice(0, 2).map((material, i) => (
                                  <Badge key={i} variant="outline" className="text-xs">
                                    {material}
                                  </Badge>
                              ))}
                              {artwork.materials.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{artwork.materials.length - 2} more
                                  </Badge>
                              )}
                            </div>
                          </CardContent>
                        </Card>
                      </DialogTrigger>

                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl font-bold">{artwork.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid lg:grid-cols-2 gap-6">
                          <div>
                            <img
                                src={artwork.image}
                                alt={artwork.title}
                                className="w-full h-96 object-cover rounded-lg"
                            />
                          </div>
                          <div className="space-y-4">
                            <div>
                              <h4 className="font-semibold text-primary mb-2">Artist</h4>
                              <p>{artwork.artist}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">Story</h4>
                              <p className="text-muted-foreground">{artwork.story}</p>
                            </div>
                            <div>
                              <h4 className="font-semibold text-primary mb-2">Materials Used</h4>
                              <div className="flex flex-wrap gap-2">
                                {artwork.materials.map((material, i) => (
                                    <Badge key={i} variant="secondary">{material}</Badge>
                                ))}
                              </div>
                            </div>
                            <div className="flex items-center justify-between pt-4 border-t">
                              <div className="flex items-center space-x-2">
                                <Heart className="w-5 h-5 text-accent-coral" />
                                <span className="font-semibold">{artwork.likes} likes</span>
                              </div>
                              <Button variant="outline" size="sm">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                ))}
              </div>
          )}

          {/* View More Button */}
          {filteredArtworks.length > 0 && (
              <div className="text-center mt-12">
                <Button size="lg" className="bg-gradient-secondary btn-hover-lift">
                  View More Amazing Art
                </Button>
              </div>
          )}
        </div>
      </section>
  );
};

export default ArtGallery;
