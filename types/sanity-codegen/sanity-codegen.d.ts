/// <reference types="@sanity-codegen/types" />

namespace Sanity.Default.Client {
  type Config = {
    AllBlogPosts: Sanity.Default.Query.AllBlogPosts;
    BlogPost: Sanity.Default.Query.BlogPost;
  };
}
namespace Sanity.Default.Query {
  type AllBlogPosts = {
    slug: Sanity.Default.Schema.IconColor;
    title: string | null;
  }[];
}
namespace Sanity.Default.Query {
  type BlogPost = {
    categories:
      | {
          name: Sanity.Ref.Ref_eY6iXjf9WnEnNqDs;
          slug: Sanity.Ref.Ref_fk7kzQRt0izEqERk;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_sIG0rqkif5l6KhGn;
          slug: Sanity.Ref.Ref_kWsK6nc1zX0si8hV;
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
        categories?: Sanity.Reference<Sanity.Ref.Ref_hjvycdQzz0RGgeNN>[];
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
        featuredImage?: Sanity.Ref.Ref_XHwPECvIi1prLrSM;
        seo?: Sanity.Ref.Ref_7xqYTKlvJeUF77jq;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_b30HvXKKir66HSBh>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Button =
    | {
        align?: string;
        buttonStyle?: string;
        link: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
        size?: string;
        text: string;
        theme?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CardGrid =
    | {
        cards: Sanity.Ref.Ref_O7rZD5cB6uJ9A29H[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CaseStudy =
    | {
        sections: {
          eyebrow: string;
          header?: string;
          subsections?: {
            eyebrow?: string;
            iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
            innerBlocks?: (
              | Sanity.Ref.Ref_0Ujy6ZkOAOEsoAjh
              | Sanity.Ref.Ref_u3WElgGemhxJF7CU
              | Sanity.Ref.Ref_WptRM3UuvspXq8Jm
            )[];
          }[];
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CaseStudyTwoUp =
    | {
        iconCard?: {
          rows?: {
            icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
            iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
            text?: string;
          }[];
        };
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
        logos?: {
          externalUrl?: string;
          image: {
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
        }[];
        styleAsCard?: boolean;
        text?: (
          | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
  type CaseStudyTwoUpStats =
    | {
        columns: {
          col1?: Sanity.Ref.Ref_JPiZDoYMG6ceNAQB[];
          col2?: Sanity.Ref.Ref_JPiZDoYMG6ceNAQB[];
        };
        header?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CaseStudyWideCards =
    | {
        header?: string;
        iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
        stages: {
          description?: {
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
          icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_hjvycdQzz0RGgeNN>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type FooterContent =
    | {
        _id: string;
        _type: "footerContent";
        certifications?: string[];
        contactInfo?: string;
        copyrightCompany?: string;
        copyrightDescription?: string;
        copyrightStartYear?: string;
        legalLinks?: Sanity.Ref.Ref_BX7aysaD3Iy7ZIbe[];
        linkedInLink?: string;
        tagline?: string;
        twitterLink?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type FooterNavigation =
    | {
        _id: string;
        _type: "footerNavigation";
        navigationSections?: {
          navigationLinks: Sanity.Ref.Ref_BX7aysaD3Iy7ZIbe[];
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type FourPointChart =
    | {
        header: string;
        points: {
          text?: string;
          title?: string;
        }[];
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
        linkUrl: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
        shape: string;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type GeometricCTAs =
    | {
        ctas: Sanity.Ref.Ref_Dyn1EKZXskCZIZi5[];
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
        ctas: Sanity.Ref.Ref_wenf69IwcbFKpO5u[];
        header?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type HomePageHero =
    | {
        buttonLink: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
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
  type HubspotForm =
    | {
        header?: string;
        hubspotFormId: string;
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
  type Icon = string | undefined;
}
namespace Sanity.Default.Schema {
  type IconCard =
    | {
        header?: string;
        icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
        iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
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
  type IconColor = string;
}
namespace Sanity.Default.Schema {
  type Link = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_ckeBnuB7xSMOcclO>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_DkOtJzUY8eYM5yld;
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
  type NavigationLink =
    | {
        title: string;
        url: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationSectionPanel =
    | {
        ctaLink?: {
          title?: string;
          url: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
        };
        hideTeaserDesktop?: boolean;
        hideTeaserMobile?: boolean;
        navigationLinkGroups: {
          navigationLinks: Sanity.Ref.Ref_BX7aysaD3Iy7ZIbe[];
          title?: string;
          titlelink: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_PtyKxYpweeiJPQiL>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_z2aqxEoocqcNriTL;
        homeHeroThreeUp?: Sanity.Ref.Ref_Xkf1bZWMeUctRbai;
        pageBuilder?: Sanity.Ref.Ref_YUcUFNvjWVvkGzfO;
        pageHero?: Sanity.Ref.Ref_ApVMvebpYW2g6w0P;
        parent?: Sanity.Reference<Sanity.Ref.Ref_ckeBnuB7xSMOcclO>;
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
        | Sanity.Ref.Ref_1Py9ZQAEFDJmQwIm
        | Sanity.Ref.Ref_BrlJmHvDcQX7vubh
        | Sanity.Ref.Ref_do258i2Lejhbzf6l
        | Sanity.Ref.Ref_sKefxar8XF5YiRmG
        | Sanity.Ref.Ref_sz0w8pbLkZY1SEz7
        | Sanity.Ref.Ref_Tlj54LAmc3jcENEQ
        | Sanity.Ref.Ref_tP6T5StIrIuRjfzX
        | Sanity.Ref.Ref_wfPLcfYk0iYoypT9
        | Sanity.Ref.Ref_XVGaO2o0Kj5xD8B5
      )[]
    | undefined;
}
namespace Sanity.Default.Schema {
  type PageHero =
    | {
        buttonLink: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
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
          | Sanity.Ref.Ref_8DIec2XosuXjTQU5
          | Sanity.Ref.Ref_93chQDbXevymW05r
          | Sanity.Ref.Ref_dNKkSOQFAmiUSyc1
          | Sanity.Ref.Ref_EdbybvNsE9pEEEXI
          | Sanity.Ref.Ref_EWeMlD9D6AajyCVm
          | Sanity.Ref.Ref_k4hyUCXPLCZukUsr
          | Sanity.Ref.Ref_mQaeMCGtqhsVCJ1p
          | Sanity.Ref.Ref_vYMYS17LU64CrsuI
        )[];
        text?: (
          | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
  type PageSectionImage =
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
          | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
        source?: Sanity.Ref.Ref_nC8UBa0SEvo29PFC;
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
        metadata?: Sanity.Ref.Ref_46WWKziEVtTntJ0j;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_nC8UBa0SEvo29PFC;
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
        dimensions?: Sanity.Ref.Ref_tgUmGq0eNptapBXr;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_jdM0cJal6fRnej3h;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
        darkVibrant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
        dominant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
        lightMuted?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
        lightVibrant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
        muted?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
        vibrant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
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
  type StatCard =
    | {
        description?: (
          | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
        icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
        iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
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
        mediaType?: string;
        statistic: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type StyledLink =
    | {
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
          icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
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
        buttonUrl: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
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
  type ThreeUpCardCta =
    | {
        ctas: Sanity.Reference<Sanity.Ref.Ref_PtyKxYpweeiJPQiL>[];
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
          | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
namespace Sanity.Default.Schema {
  type WideCards =
    | {
        cards: {
          header?: string;
          icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
          iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
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
        }[];
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_0Ujy6ZkOAOEsoAjh = {
    columns: {
      col1?: Sanity.Ref.Ref_JPiZDoYMG6ceNAQB[];
      col2?: Sanity.Ref.Ref_JPiZDoYMG6ceNAQB[];
    };
    header?: string;
  };
}
namespace Sanity.Ref {
  type Ref_1Py9ZQAEFDJmQwIm = {
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
      icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
      subtitle?: string;
      title: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_46WWKziEVtTntJ0j = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_tgUmGq0eNptapBXr;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_jdM0cJal6fRnej3h;
  };
}
namespace Sanity.Ref {
  type Ref_4BBpncHz6vHohigA = string;
}
namespace Sanity.Ref {
  type Ref_7xqYTKlvJeUF77jq = {
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
  type Ref_8DIec2XosuXjTQU5 = {
    ctas: Sanity.Reference<Sanity.Ref.Ref_PtyKxYpweeiJPQiL>[];
  };
}
namespace Sanity.Ref {
  type Ref_93chQDbXevymW05r = {
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
  type Ref_AhguE3UtEZ6MzJCr = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_ckeBnuB7xSMOcclO>;
  };
}
namespace Sanity.Ref {
  type Ref_ApVMvebpYW2g6w0P = {
    buttonLink: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
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
  type Ref_b30HvXKKir66HSBh =
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
  type Ref_BrlJmHvDcQX7vubh = {
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
  type Ref_BX7aysaD3Iy7ZIbe = {
    title: string;
    url: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
  };
}
namespace Sanity.Ref {
  type Ref_ckeBnuB7xSMOcclO =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_z2aqxEoocqcNriTL;
        homeHeroThreeUp?: Sanity.Ref.Ref_Xkf1bZWMeUctRbai;
        pageBuilder?: Sanity.Ref.Ref_YUcUFNvjWVvkGzfO;
        pageHero?: Sanity.Ref.Ref_ApVMvebpYW2g6w0P;
        parent?: Sanity.Reference<Sanity.Ref.Ref_ckeBnuB7xSMOcclO>;
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
  type Ref_DkOtJzUY8eYM5yld = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
    };
    hideTeaserDesktop?: boolean;
    hideTeaserMobile?: boolean;
    navigationLinkGroups: {
      navigationLinks: Sanity.Ref.Ref_BX7aysaD3Iy7ZIbe[];
      title?: string;
      titlelink: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_PtyKxYpweeiJPQiL>;
  };
}
namespace Sanity.Ref {
  type Ref_dNKkSOQFAmiUSyc1 = {
    cards: Sanity.Ref.Ref_O7rZD5cB6uJ9A29H[];
  };
}
namespace Sanity.Ref {
  type Ref_do258i2Lejhbzf6l = {
    header?: string;
    hubspotFormId: string;
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
  type Ref_Dyn1EKZXskCZIZi5 = {
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
    linkUrl: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
    shape: string;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_EdbybvNsE9pEEEXI = {
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_EWeMlD9D6AajyCVm = {
    cards: {
      header?: string;
      icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
      iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
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
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_eY6iXjf9WnEnNqDs = string | null;
}
namespace Sanity.Ref {
  type Ref_fk7kzQRt0izEqERk = unknown;
}
namespace Sanity.Ref {
  type Ref_FSlkQko1PhEZdKqM = string;
}
namespace Sanity.Ref {
  type Ref_hjvycdQzz0RGgeNN =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_hjvycdQzz0RGgeNN>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_jdM0cJal6fRnej3h = {
    darkMuted?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
    darkVibrant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
    dominant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
    lightMuted?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
    lightVibrant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
    muted?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
    vibrant?: Sanity.Ref.Ref_MKNKrXFaHhDYH3OW;
  };
}
namespace Sanity.Ref {
  type Ref_JPiZDoYMG6ceNAQB = {
    description?: (
      | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
    icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
    iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
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
    mediaType?: string;
    statistic: string;
  };
}
namespace Sanity.Ref {
  type Ref_k4hyUCXPLCZukUsr = {
    cards: {
      header?: string;
      icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
      iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
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
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_kWsK6nc1zX0si8hV = unknown;
}
namespace Sanity.Ref {
  type Ref_MKNKrXFaHhDYH3OW = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_mQaeMCGtqhsVCJ1p = {
    text?: (
      | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
  type Ref_mVSAdw5aQ8Rdp19I = {
    link: string;
    text: string;
  };
}
namespace Sanity.Ref {
  type Ref_nC8UBa0SEvo29PFC = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_O7rZD5cB6uJ9A29H = {
    header?: string;
    icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
    iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
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
  type Ref_PtyKxYpweeiJPQiL =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_hjvycdQzz0RGgeNN>[];
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
        featuredImage?: Sanity.Ref.Ref_XHwPECvIi1prLrSM;
        seo?: Sanity.Ref.Ref_7xqYTKlvJeUF77jq;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_b30HvXKKir66HSBh>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_sIG0rqkif5l6KhGn = string | null;
}
namespace Sanity.Ref {
  type Ref_sKefxar8XF5YiRmG = {
    ctas: Sanity.Ref.Ref_Dyn1EKZXskCZIZi5[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_sz0w8pbLkZY1SEz7 = {
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
  type Ref_tgUmGq0eNptapBXr = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_Tlj54LAmc3jcENEQ = {
    header: string;
    points: {
      text?: string;
      title?: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_tP6T5StIrIuRjfzX = {
    bgColor: string;
    bgImage: string;
    innerBlocks: (
      | Sanity.Ref.Ref_8DIec2XosuXjTQU5
      | Sanity.Ref.Ref_93chQDbXevymW05r
      | Sanity.Ref.Ref_dNKkSOQFAmiUSyc1
      | Sanity.Ref.Ref_EdbybvNsE9pEEEXI
      | Sanity.Ref.Ref_EWeMlD9D6AajyCVm
      | Sanity.Ref.Ref_k4hyUCXPLCZukUsr
      | Sanity.Ref.Ref_mQaeMCGtqhsVCJ1p
      | Sanity.Ref.Ref_vYMYS17LU64CrsuI
    )[];
    text?: (
      | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
  type Ref_u3WElgGemhxJF7CU = {
    header?: string;
    iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
    stages: {
      description?: {
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
      icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
      title: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_vYMYS17LU64CrsuI = {
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
      | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
  type Ref_wenf69IwcbFKpO5u = {
    buttonText?: string;
    buttonUrl: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
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
  type Ref_wfPLcfYk0iYoypT9 = {
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
  type Ref_WptRM3UuvspXq8Jm = {
    iconCard?: {
      rows?: {
        icon?: Sanity.Ref.Ref_FSlkQko1PhEZdKqM;
        iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
        text?: string;
      }[];
    };
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
    logos?: {
      externalUrl?: string;
      image: {
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
    }[];
    styleAsCard?: boolean;
    text?: (
      | Sanity.Ref.Ref_mVSAdw5aQ8Rdp19I
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
  type Ref_XHwPECvIi1prLrSM = {
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
  type Ref_Xkf1bZWMeUctRbai = {
    ctas: Sanity.Ref.Ref_wenf69IwcbFKpO5u[];
    header?: string;
  };
}
namespace Sanity.Ref {
  type Ref_XVGaO2o0Kj5xD8B5 = {
    sections: {
      eyebrow: string;
      header?: string;
      subsections?: {
        eyebrow?: string;
        iconColor: Sanity.Ref.Ref_4BBpncHz6vHohigA;
        innerBlocks?: (
          | Sanity.Ref.Ref_0Ujy6ZkOAOEsoAjh
          | Sanity.Ref.Ref_u3WElgGemhxJF7CU
          | Sanity.Ref.Ref_WptRM3UuvspXq8Jm
        )[];
      }[];
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_YUcUFNvjWVvkGzfO = (
    | Sanity.Ref.Ref_1Py9ZQAEFDJmQwIm
    | Sanity.Ref.Ref_BrlJmHvDcQX7vubh
    | Sanity.Ref.Ref_do258i2Lejhbzf6l
    | Sanity.Ref.Ref_sKefxar8XF5YiRmG
    | Sanity.Ref.Ref_sz0w8pbLkZY1SEz7
    | Sanity.Ref.Ref_Tlj54LAmc3jcENEQ
    | Sanity.Ref.Ref_tP6T5StIrIuRjfzX
    | Sanity.Ref.Ref_wfPLcfYk0iYoypT9
    | Sanity.Ref.Ref_XVGaO2o0Kj5xD8B5
  )[];
}
namespace Sanity.Ref {
  type Ref_z2aqxEoocqcNriTL = {
    buttonLink: Sanity.Ref.Ref_AhguE3UtEZ6MzJCr;
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
