/// <reference types="@sanity-codegen/types" />

namespace Sanity.Default.Client {
  type Config = {
    AllBlogPosts: Sanity.Default.Query.AllBlogPosts;
    BlogPost: Sanity.Default.Query.BlogPost;
  };
}
namespace Sanity.Default.Query {
  type AllBlogPosts = {
    slug: string;
    title: string | null;
  }[];
}
namespace Sanity.Default.Query {
  type BlogPost = {
    categories:
      | {
          name: Sanity.Ref.Ref_ELQHSVTSOc2rBMxK;
          slug: Sanity.Ref.Ref_a9ShzyGM5SRsgPvP;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_PP2cAYBH3h49VGPO;
          slug: Sanity.Ref.Ref_gpT1RopKgGeF9X3e;
        }[]
      | null;
    title: string | null;
  };
}
namespace Sanity.Default.Schema {
  type Accordion =
    | {
        header?: string;
        items: {
          text: {
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
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type BlogPost =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_XKAUujIUuvmfppri>[];
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
        featuredImage?: Sanity.Ref.Ref_vL56bIBHbUnSctda;
        seo?: Sanity.Ref.Ref_HkIE7wtJJikYsk64;
        showHeroSubheader?: boolean;
        slug: {
          _type: "slug";
          current: string;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_G4ghRPamEGFs5yX7>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Button =
    | {
        align?: string;
        buttonStyle?: string;
        link: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
        size?: string;
        text: string;
        theme?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CardGrid =
    | {
        cards: Sanity.Ref.Ref_moElLdEkrTw9zfgb[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_XKAUujIUuvmfppri>;
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
  type GeometricCTA =
    | {
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
        linkText?: string;
        linkUrl: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
        shape: string;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type GeometricCTAs =
    | {
        ctas: Sanity.Ref.Ref_mcPA2mw1uq5HIqGu[];
        title?: string;
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
  type HomeHeroThreeUp =
    | {
        ctas: Sanity.Ref.Ref_qYELyNVM0GYbUqcB[];
        header?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type HomePageHero =
    | {
        buttonLink: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
        buttonText?: string;
        header?: string;
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
        media?: string;
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
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Icon = string | undefined;
}
namespace Sanity.Default.Schema {
  type IconCard =
    | {
        header?: string;
        icon?: Sanity.Ref.Ref_eWL40Z8SdMm4cFvz;
        subheader?: string;
        text?: {
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
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Link = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_j8S2BIAzLbPHUDNY>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_aJsZs9yE0H7yaM80;
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type MediaTag =
    | {
        _id: string;
        _type: "media.tag";
        name?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationSectionPanel =
    | {
        ctaLink?: {
          title?: string;
          url: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
        };
        hideTeaserDesktop?: boolean;
        hideTeaserMobile?: boolean;
        navigationLinkGroups: {
          navigationLinks: {
            title: string;
            url: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
          }[];
          title?: string;
          titlelink: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_QfMqvB6gd3ckS5Jj>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_E1GEz3DeprSvxdSa;
        homeHeroThreeUp?: Sanity.Ref.Ref_zm66cL4Dty5KqQap;
        pageBuilder?: Sanity.Ref.Ref_K7QwIb312ALgKNvk;
        pageHero?: Sanity.Ref.Ref_t6HNEMAzaowwlqmw;
        parent?: Sanity.Reference<Sanity.Ref.Ref_j8S2BIAzLbPHUDNY>;
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
  type PageBuilder =
    | (
        | Sanity.Ref.Ref_0Tz2ai6pftd57LqC
        | Sanity.Ref.Ref_4QGa7CBQgm3VGEvk
        | Sanity.Ref.Ref_bwbGMrJtx6fnKXu2
        | Sanity.Ref.Ref_EZcEK5jtYG6TMnNo
        | Sanity.Ref.Ref_y0QiKAnpWA3OKhiY
        | Sanity.Ref.Ref_Yvxe8jBAtzKFM83o
      )[]
    | undefined;
}
namespace Sanity.Default.Schema {
  type PageHero =
    | {
        buttonLink: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
        buttonText?: string;
        eyebrow?: string;
        header?: string;
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
        simpleHeader?: boolean;
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
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type PageSection =
    | {
        bgColor: string;
        bgImage: string;
        innerBlocks: (
          | Sanity.Ref.Ref_hLyre1cLpvXruQU3
          | Sanity.Ref.Ref_QAFA9Cal6283Gthy
          | Sanity.Ref.Ref_X16XLzPEGYfdXGCh
          | Sanity.Ref.Ref_yqnZoDAxLdkUV7pD
        )[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type PartnerLogoGrid =
    | {
        header?: string;
        logos?: {
          external?: string;
          file?: {
            asset: Sanity.Reference<unknown>;
          };
          logo: {
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
          title?: string;
        }[];
        subheader?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Quote =
    | {
        attribution?: string;
        bgImage: string;
        quote: {
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
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type RichText =
    | {
        text?: (
          | Sanity.Ref.Ref_PcZHJkAzVadrf7ym
          | {
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
            }
        )[];
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
        source?: Sanity.Ref.Ref_btVTMUeu6A7TsUpA;
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
        metadata?: Sanity.Ref.Ref_U1TfSWM9OMB69dJ9;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_btVTMUeu6A7TsUpA;
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
        dimensions?: Sanity.Ref.Ref_yVy9NoxeHhzkn5at;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_GlUtDQat8rim1uBP;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
        darkVibrant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
        dominant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
        lightMuted?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
        lightVibrant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
        muted?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
        vibrant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
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
  type StyledLink =
    | {
        align?: string;
        link: string;
        text: string;
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
namespace Sanity.Default.Schema {
  type ThreeStageProcess =
    | {
        header?: string;
        stages: {
          description: {
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
          icon?: Sanity.Ref.Ref_eWL40Z8SdMm4cFvz;
          subtitle?: string;
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type ThreeUpCard =
    | {
        buttonText?: string;
        buttonUrl: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
        header?: string;
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
  type TwoUp =
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
        imageAlignment?: string;
        imagePaddingOverride?: number;
        text?: (
          | Sanity.Ref.Ref_PcZHJkAzVadrf7ym
          | {
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
            }
        )[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type VideoEmbed =
    | {
        url?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_0Tz2ai6pftd57LqC = {
    attribution?: string;
    bgImage: string;
    quote: {
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
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_4QGa7CBQgm3VGEvk = {
    header?: string;
    stages: {
      description: {
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
      icon?: Sanity.Ref.Ref_eWL40Z8SdMm4cFvz;
      subtitle?: string;
      title: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_a9ShzyGM5SRsgPvP = unknown;
}
namespace Sanity.Ref {
  type Ref_aJsZs9yE0H7yaM80 = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
    };
    hideTeaserDesktop?: boolean;
    hideTeaserMobile?: boolean;
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
      }[];
      title?: string;
      titlelink: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_QfMqvB6gd3ckS5Jj>;
  };
}
namespace Sanity.Ref {
  type Ref_btVTMUeu6A7TsUpA = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_bwbGMrJtx6fnKXu2 = {
    header?: string;
    logos?: {
      external?: string;
      file?: {
        asset: Sanity.Reference<unknown>;
      };
      logo: {
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
      title?: string;
    }[];
    subheader?: string;
  };
}
namespace Sanity.Ref {
  type Ref_E1GEz3DeprSvxdSa = {
    buttonLink: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
    buttonText?: string;
    header?: string;
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
    media?: string;
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
  };
}
namespace Sanity.Ref {
  type Ref_ELQHSVTSOc2rBMxK = string | null;
}
namespace Sanity.Ref {
  type Ref_eWL40Z8SdMm4cFvz = string;
}
namespace Sanity.Ref {
  type Ref_EZcEK5jtYG6TMnNo = {
    header?: string;
    items: {
      text: {
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
      title: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_G4ghRPamEGFs5yX7 =
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
  type Ref_GlUtDQat8rim1uBP = {
    darkMuted?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
    darkVibrant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
    dominant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
    lightMuted?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
    lightVibrant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
    muted?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
    vibrant?: Sanity.Ref.Ref_O7Jq6bjffji1RIgZ;
  };
}
namespace Sanity.Ref {
  type Ref_gpT1RopKgGeF9X3e = unknown;
}
namespace Sanity.Ref {
  type Ref_HkIE7wtJJikYsk64 = {
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
  type Ref_hLyre1cLpvXruQU3 = {
    text?: (
      | Sanity.Ref.Ref_PcZHJkAzVadrf7ym
      | {
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
        }
    )[];
  };
}
namespace Sanity.Ref {
  type Ref_j8S2BIAzLbPHUDNY =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_E1GEz3DeprSvxdSa;
        homeHeroThreeUp?: Sanity.Ref.Ref_zm66cL4Dty5KqQap;
        pageBuilder?: Sanity.Ref.Ref_K7QwIb312ALgKNvk;
        pageHero?: Sanity.Ref.Ref_t6HNEMAzaowwlqmw;
        parent?: Sanity.Reference<Sanity.Ref.Ref_j8S2BIAzLbPHUDNY>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_K7QwIb312ALgKNvk = (
    | Sanity.Ref.Ref_0Tz2ai6pftd57LqC
    | Sanity.Ref.Ref_4QGa7CBQgm3VGEvk
    | Sanity.Ref.Ref_bwbGMrJtx6fnKXu2
    | Sanity.Ref.Ref_EZcEK5jtYG6TMnNo
    | Sanity.Ref.Ref_y0QiKAnpWA3OKhiY
    | Sanity.Ref.Ref_Yvxe8jBAtzKFM83o
  )[];
}
namespace Sanity.Ref {
  type Ref_mcPA2mw1uq5HIqGu = {
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
    linkText?: string;
    linkUrl: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
    shape: string;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_moElLdEkrTw9zfgb = {
    header?: string;
    icon?: Sanity.Ref.Ref_eWL40Z8SdMm4cFvz;
    subheader?: string;
    text?: {
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
  };
}
namespace Sanity.Ref {
  type Ref_O7Jq6bjffji1RIgZ = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_PcZHJkAzVadrf7ym = {
    align?: string;
    link: string;
    text: string;
  };
}
namespace Sanity.Ref {
  type Ref_PP2cAYBH3h49VGPO = string | null;
}
namespace Sanity.Ref {
  type Ref_QAFA9Cal6283Gthy = {
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
    imageAlignment?: string;
    imagePaddingOverride?: number;
    text?: (
      | Sanity.Ref.Ref_PcZHJkAzVadrf7ym
      | {
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
        }
    )[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_QfMqvB6gd3ckS5Jj =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_XKAUujIUuvmfppri>[];
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
        featuredImage?: Sanity.Ref.Ref_vL56bIBHbUnSctda;
        seo?: Sanity.Ref.Ref_HkIE7wtJJikYsk64;
        showHeroSubheader?: boolean;
        slug: {
          _type: "slug";
          current: string;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_G4ghRPamEGFs5yX7>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_qYELyNVM0GYbUqcB = {
    buttonText?: string;
    buttonUrl: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
    header?: string;
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
  type Ref_t6HNEMAzaowwlqmw = {
    buttonLink: Sanity.Ref.Ref_Z3NctZXOBmXuOE8C;
    buttonText?: string;
    eyebrow?: string;
    header?: string;
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
    simpleHeader?: boolean;
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
  };
}
namespace Sanity.Ref {
  type Ref_U1TfSWM9OMB69dJ9 = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_yVy9NoxeHhzkn5at;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_GlUtDQat8rim1uBP;
  };
}
namespace Sanity.Ref {
  type Ref_vL56bIBHbUnSctda = {
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
  type Ref_X16XLzPEGYfdXGCh = {
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_XKAUujIUuvmfppri =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_XKAUujIUuvmfppri>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_y0QiKAnpWA3OKhiY = {
    bgColor: string;
    bgImage: string;
    innerBlocks: (
      | Sanity.Ref.Ref_hLyre1cLpvXruQU3
      | Sanity.Ref.Ref_QAFA9Cal6283Gthy
      | Sanity.Ref.Ref_X16XLzPEGYfdXGCh
      | Sanity.Ref.Ref_yqnZoDAxLdkUV7pD
    )[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_yqnZoDAxLdkUV7pD = {
    cards: Sanity.Ref.Ref_moElLdEkrTw9zfgb[];
  };
}
namespace Sanity.Ref {
  type Ref_Yvxe8jBAtzKFM83o = {
    ctas: Sanity.Ref.Ref_mcPA2mw1uq5HIqGu[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_yVy9NoxeHhzkn5at = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_Z3NctZXOBmXuOE8C = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_j8S2BIAzLbPHUDNY>;
  };
}
namespace Sanity.Ref {
  type Ref_zm66cL4Dty5KqQap = {
    ctas: Sanity.Ref.Ref_qYELyNVM0GYbUqcB[];
    header?: string;
  };
}
