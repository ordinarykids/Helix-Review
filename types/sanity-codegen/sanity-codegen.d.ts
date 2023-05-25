/// <reference types="@sanity-codegen/types" />

namespace Sanity.Default.Client {
  type Config = {
    AllBlogPosts: Sanity.Default.Query.AllBlogPosts;
    BlogPost: Sanity.Default.Query.BlogPost;
    MainNavigation: Sanity.Default.Query.MainNavigation;
    PageByPath: Sanity.Default.Query.PageByPath;
  };
}
namespace Sanity.Default.Query {
  type AllBlogPosts = {
    slug: string | null;
    title: string | null;
  }[];
}
namespace Sanity.Default.Query {
  type BlogPost = {
    categories:
      | {
          name: Sanity.Ref.Ref_bMvV4e8zMW71xBzR;
          slug: Sanity.Ref.Ref_Vzn4NyofJvsvPnKn;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_FAqZMDIrhL2EdJRk;
          slug: Sanity.Ref.Ref_k43KVRBQ5uNGf5Un;
        }[]
      | null;
    title: string | null;
  };
}
namespace Sanity.Default.Query {
  type MainNavigation = {
    navigationSections:
      | {
          navigationSectionPanel: {
            columns: {
              navigationLinkGroups: {
                navigationLinks: {
                  title: Sanity.Ref.Ref_VGpmsKaoontjAW0y;
                  url: {
                    externalUrl: Sanity.Ref.Ref_a8bVLlKxFQxPk1ky;
                    link: Sanity.Ref.Ref_pWMY1DAtSqvNWlbm;
                  };
                };
                title: Sanity.Ref.Ref_jldvc4Mk04uRozxC;
              }[];
            }[];
            teaser: Sanity.Ref.Ref_oFrUUN2zDXXmLJaC;
          };
          title: string;
        }[]
      | null;
  };
}
namespace Sanity.Default.Query {
  type PageByPath = {
    title: string | null;
  };
}
namespace Sanity.Default.Schema {
  type BlogPost =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_97YH0kpyFpDHViFE>[];
        content?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        featuredImage?: Sanity.Ref.Ref_kTSDGTC7Kxmi1XPK;
        seo?: Sanity.Ref.Ref_a9G1Otgez6djixg6;
        showHeroSubheader?: boolean;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        subheader?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        tags?: Sanity.Reference<Sanity.Ref.Ref_9bx1GUvw146tsbrk>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_97YH0kpyFpDHViFE>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type FeaturedImage =
    | {
        image?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Geopoint =
    | {
        alt?: number;
        lat?: number;
        lng?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Link = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_HHfH8dpUN83x0U1O>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_NmlRSx1Um3A4KnE9;
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationSectionPanel =
    | {
        columns: {
          navigationLinkGroups: {
            navigationLinks: {
              title: string;
              url: Sanity.Ref.Ref_XuBqGvTKNeuX4AsE;
            }[];
            title?: string;
          }[];
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_IsdGAhtedfJvkYc6>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        parent?: Sanity.Reference<Sanity.Ref.Ref_HHfH8dpUN83x0U1O>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityAssetSourceData =
    | {
        id?: string;
        name?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityFileAsset =
    | {
        _id: string;
        _type: "sanity.fileAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_BxWbkHJgbAW9i8tv;
        title?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageAsset =
    | {
        _id: string;
        _type: "sanity.imageAsset";
        altText?: string;
        assetId?: string;
        description?: string;
        extension?: string;
        label?: string;
        metadata?: Sanity.Ref.Ref_2l4mNB3LVrqST1A9;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_BxWbkHJgbAW9i8tv;
        title?: string;
        uploadId?: string;
        url?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageCrop =
    | {
        bottom?: number;
        left?: number;
        right?: number;
        top?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageDimensions =
    | {
        aspectRatio?: number;
        height?: number;
        width?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageHotspot =
    | {
        height?: number;
        width?: number;
        x?: number;
        y?: number;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImageMetadata =
    | {
        blurHash?: string;
        dimensions?: Sanity.Ref.Ref_i2wGjZYREH3mJ2m4;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_ifUxR7tovGibdMbJ;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
        darkVibrant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
        dominant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
        lightMuted?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
        lightVibrant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
        muted?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
        vibrant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePaletteSwatch =
    | {
        background?: string;
        foreground?: string;
        population?: number;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SeoFields =
    | {
        canonicalUrl?: string;
        focusKeyword?: string;
        focusSynonyms?: string;
        nofollow?: boolean;
        noindex?: boolean;
        ogDescription?: string;
        ogImage?: {
          asset: Sanity.Reference<{
            _type: "sanity.imageAsset";
            assetId: string;
            extension: string;
            metadata: {
              _type: "sanity.imageMetadata";
              dimensions: {
                _type: "sanity.imageDimensions";
                aspectRatio: number;
                height: number;
                width: number;
              };
              hasAlpha: boolean;
              isOpaque: boolean;
              lqip: string;
              palette: {
                _type: "sanity.imagePalette";
                darkMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                darkVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                dominant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightMuted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                lightVibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                muted: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
                vibrant: {
                  _type: "sanity.imagePaletteSwatch";
                  background: string;
                  foreground: string;
                  population: number;
                  title: string;
                };
              };
            };
            mimeType: string;
            originalFilename: string;
            path: string;
            sha1hash: string;
            size: number;
            uploadId: string;
            url: string;
          }>;
          crop?: {
            _type: "sanity.imageCrop";
            bottom: number;
            left: number;
            right: number;
            top: number;
          };
          hotspot?: {
            _type: "sanity.imageHotspot";
            height: number;
            width: number;
            x: number;
            y: number;
          };
        };
        openGraphUrl?: string;
        seoDescription?: string;
        seoTitle?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Slug =
    | {
        current?: string;
        source?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Tag =
    | {
        _id: string;
        _type: "tag";
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_2l4mNB3LVrqST1A9 = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_i2wGjZYREH3mJ2m4;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_ifUxR7tovGibdMbJ;
  };
}
namespace Sanity.Ref {
  type Ref_4lIzKgXKaBqI9QaI = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_97YH0kpyFpDHViFE =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_97YH0kpyFpDHViFE>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_9bx1GUvw146tsbrk =
    | {
        _id: string;
        _type: "tag";
        name?: string;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_a8bVLlKxFQxPk1ky = unknown;
}
namespace Sanity.Ref {
  type Ref_a9G1Otgez6djixg6 = {
    canonicalUrl?: string;
    focusKeyword?: string;
    focusSynonyms?: string;
    nofollow?: boolean;
    noindex?: boolean;
    ogDescription?: string;
    ogImage?: {
      asset: Sanity.Reference<{
        _type: "sanity.imageAsset";
        assetId: string;
        extension: string;
        metadata: {
          _type: "sanity.imageMetadata";
          dimensions: {
            _type: "sanity.imageDimensions";
            aspectRatio: number;
            height: number;
            width: number;
          };
          hasAlpha: boolean;
          isOpaque: boolean;
          lqip: string;
          palette: {
            _type: "sanity.imagePalette";
            darkMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            dominant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            muted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            vibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
          };
        };
        mimeType: string;
        originalFilename: string;
        path: string;
        sha1hash: string;
        size: number;
        uploadId: string;
        url: string;
      }>;
      crop?: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot?: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
    openGraphUrl?: string;
    seoDescription?: string;
    seoTitle?: string;
  };
}
namespace Sanity.Ref {
  type Ref_bMvV4e8zMW71xBzR = string | null;
}
namespace Sanity.Ref {
  type Ref_BxWbkHJgbAW9i8tv = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_FAqZMDIrhL2EdJRk = string | null;
}
namespace Sanity.Ref {
  type Ref_HHfH8dpUN83x0U1O = Sanity.Ref.Ref_HHfH8dpUN83x0U1O;
}
namespace Sanity.Ref {
  type Ref_i2wGjZYREH3mJ2m4 = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_ifUxR7tovGibdMbJ = {
    darkMuted?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
    darkVibrant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
    dominant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
    lightMuted?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
    lightVibrant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
    muted?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
    vibrant?: Sanity.Ref.Ref_4lIzKgXKaBqI9QaI;
  };
}
namespace Sanity.Ref {
  type Ref_IsdGAhtedfJvkYc6 =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_97YH0kpyFpDHViFE>[];
        content?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        featuredImage?: Sanity.Ref.Ref_kTSDGTC7Kxmi1XPK;
        seo?: Sanity.Ref.Ref_a9G1Otgez6djixg6;
        showHeroSubheader?: boolean;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        subheader?: {
          _key: string;
          _type: "block";
          children: {
            _key: string;
            _type: "span";
            marks?: unknown[];
            text?: string;
          }[];
          markDefs?: unknown[];
          style?: string;
        }[];
        tags?: Sanity.Reference<Sanity.Ref.Ref_9bx1GUvw146tsbrk>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_jldvc4Mk04uRozxC = string | null;
}
namespace Sanity.Ref {
  type Ref_k43KVRBQ5uNGf5Un = unknown;
}
namespace Sanity.Ref {
  type Ref_kTSDGTC7Kxmi1XPK = {
    image?: {
      asset: Sanity.Reference<{
        _type: "sanity.imageAsset";
        assetId: string;
        extension: string;
        metadata: {
          _type: "sanity.imageMetadata";
          dimensions: {
            _type: "sanity.imageDimensions";
            aspectRatio: number;
            height: number;
            width: number;
          };
          hasAlpha: boolean;
          isOpaque: boolean;
          lqip: string;
          palette: {
            _type: "sanity.imagePalette";
            darkMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            darkVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            dominant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightMuted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            lightVibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            muted: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
            vibrant: {
              _type: "sanity.imagePaletteSwatch";
              background: string;
              foreground: string;
              population: number;
              title: string;
            };
          };
        };
        mimeType: string;
        originalFilename: string;
        path: string;
        sha1hash: string;
        size: number;
        uploadId: string;
        url: string;
      }>;
      crop?: {
        _type: "sanity.imageCrop";
        bottom: number;
        left: number;
        right: number;
        top: number;
      };
      hotspot?: {
        _type: "sanity.imageHotspot";
        height: number;
        width: number;
        x: number;
        y: number;
      };
    };
  };
}
namespace Sanity.Ref {
  type Ref_NmlRSx1Um3A4KnE9 = {
    columns: {
      navigationLinkGroups: {
        navigationLinks: {
          title: string;
          url: Sanity.Ref.Ref_XuBqGvTKNeuX4AsE;
        }[];
        title?: string;
      }[];
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_IsdGAhtedfJvkYc6>;
  };
}
namespace Sanity.Ref {
  type Ref_oFrUUN2zDXXmLJaC = {
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_XuBqGvTKNeuX4AsE;
      }[];
      title?: string;
    }[];
  }[];
}
namespace Sanity.Ref {
  type Ref_pWMY1DAtSqvNWlbm = unknown;
}
namespace Sanity.Ref {
  type Ref_VGpmsKaoontjAW0y = unknown;
}
namespace Sanity.Ref {
  type Ref_Vzn4NyofJvsvPnKn = unknown;
}
namespace Sanity.Ref {
  type Ref_XuBqGvTKNeuX4AsE = Sanity.Ref.Ref_XuBqGvTKNeuX4AsE;
}
