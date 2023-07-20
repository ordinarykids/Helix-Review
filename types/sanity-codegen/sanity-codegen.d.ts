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
          name: Sanity.Ref.Ref_nyLvDsSGJ2TzkTnM;
          slug: Sanity.Ref.Ref_hNFh2Xo4M4r1wp5M;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_muhfvHrwIVIYHZjM;
          slug: Sanity.Ref.Ref_XFf5MGv2HVJCWRjX;
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
        categories?: Sanity.Reference<Sanity.Ref.Ref_UPJEHksTn48gjbkT>[];
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
        featuredImage?: Sanity.Ref.Ref_bZK63420Q8ROEe84;
        seo?: Sanity.Ref.Ref_ptLcUb4MTQdUhruh;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_t9VBtQg6DD42teol>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Button =
    | {
        align?: string;
        buttonStyle?: string;
        link: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
        size?: string;
        text: string;
        theme?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CardGrid =
    | {
        cards: Sanity.Ref.Ref_17rXIQcQInDmQ2rt[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_UPJEHksTn48gjbkT>;
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
        legalLinks?: Sanity.Ref.Ref_pBUCDucgDlSVbOkk[];
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
          navigationLinks: Sanity.Ref.Ref_pBUCDucgDlSVbOkk[];
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
        linkUrl: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
        shape: string;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type GeometricCTAs =
    | {
        ctas: Sanity.Ref.Ref_X5bDKLq4GF1nwycr[];
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
        ctas: Sanity.Ref.Ref_54KGnnoVgO1EzK2r[];
        header?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type HomePageHero =
    | {
        buttonLink: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
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
        icon?: Sanity.Ref.Ref_XOVxc7YCUWndwIy6;
        iconColor: Sanity.Ref.Ref_WYr16L5bYOyN54OH;
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
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_yAgYDi2M4pm4Tj6Z>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_XNlKWoc2PAcCCPBV;
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
        url: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationSectionPanel =
    | {
        ctaLink?: {
          title?: string;
          url: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
        };
        hideTeaserDesktop?: boolean;
        hideTeaserMobile?: boolean;
        navigationLinkGroups: {
          navigationLinks: Sanity.Ref.Ref_pBUCDucgDlSVbOkk[];
          title?: string;
          titlelink: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_a4MZof3feiNmLrIx>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_cSsfzq1tEL7ceZrr;
        homeHeroThreeUp?: Sanity.Ref.Ref_1SuiepHYAa9LpHpz;
        pageBuilder?: Sanity.Ref.Ref_8sKfDLBXRvcwygq1;
        pageHero?: Sanity.Ref.Ref_VePTwatg76ErdCeO;
        parent?: Sanity.Reference<Sanity.Ref.Ref_yAgYDi2M4pm4Tj6Z>;
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
        | Sanity.Ref.Ref_c2M5gPix8ipd6YNW
        | Sanity.Ref.Ref_Dl96PagcSjIM7RxV
        | Sanity.Ref.Ref_k5Vyu5FvKSAJji6q
        | Sanity.Ref.Ref_QCU9R8H2ZSYHMVyG
        | Sanity.Ref.Ref_QeYQE36bKNk5Ek3h
        | Sanity.Ref.Ref_rPFkJPDKkYI0Xta2
        | Sanity.Ref.Ref_yWR0dMzsP9coG52t
        | Sanity.Ref.Ref_ZiNhj4mOzPuCcbQO
      )[]
    | undefined;
}
namespace Sanity.Default.Schema {
  type PageHero =
    | {
        buttonLink: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
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
          | Sanity.Ref.Ref_4feD07F4Ar5Zfe0A
          | Sanity.Ref.Ref_5fkpf5MHx5ah2bZs
          | Sanity.Ref.Ref_FHt1yqzvZDxPHklX
          | Sanity.Ref.Ref_I3rrBk2btj9693uh
          | Sanity.Ref.Ref_IXvS7wYQmPaW7z1f
          | Sanity.Ref.Ref_KhCPU7Kx9R1mJQcD
          | Sanity.Ref.Ref_Sa0Tygxjzsyxfa85
          | Sanity.Ref.Ref_UquP8I5VmgHrkmzr
        )[];
        text?: (
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
          | Sanity.Ref.Ref_ZNPnA1QxSCzqpeGh
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
          | Sanity.Ref.Ref_ZNPnA1QxSCzqpeGh
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
        source?: Sanity.Ref.Ref_emyeVQMNwp8fgz8B;
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
        metadata?: Sanity.Ref.Ref_pO0imP8oKpFSRaAt;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_emyeVQMNwp8fgz8B;
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
        dimensions?: Sanity.Ref.Ref_eCw1FJHHEtYKnxPN;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_yJRAIKB9agyyQoVb;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
        darkVibrant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
        dominant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
        lightMuted?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
        lightVibrant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
        muted?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
        vibrant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
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
          icon?: Sanity.Ref.Ref_XOVxc7YCUWndwIy6;
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
        buttonUrl: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
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
        ctas: Sanity.Reference<Sanity.Ref.Ref_a4MZof3feiNmLrIx>[];
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
          | Sanity.Ref.Ref_ZNPnA1QxSCzqpeGh
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
          icon?: Sanity.Ref.Ref_XOVxc7YCUWndwIy6;
          iconColor: Sanity.Ref.Ref_WYr16L5bYOyN54OH;
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
  type Ref_17rXIQcQInDmQ2rt = {
    header?: string;
    icon?: Sanity.Ref.Ref_XOVxc7YCUWndwIy6;
    iconColor: Sanity.Ref.Ref_WYr16L5bYOyN54OH;
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
  type Ref_1SuiepHYAa9LpHpz = {
    ctas: Sanity.Ref.Ref_54KGnnoVgO1EzK2r[];
    header?: string;
  };
}
namespace Sanity.Ref {
  type Ref_4feD07F4Ar5Zfe0A = {
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_54KGnnoVgO1EzK2r = {
    buttonText?: string;
    buttonUrl: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
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
  type Ref_5fkpf5MHx5ah2bZs = {
    ctas: Sanity.Reference<Sanity.Ref.Ref_a4MZof3feiNmLrIx>[];
  };
}
namespace Sanity.Ref {
  type Ref_8sKfDLBXRvcwygq1 = (
    | Sanity.Ref.Ref_c2M5gPix8ipd6YNW
    | Sanity.Ref.Ref_Dl96PagcSjIM7RxV
    | Sanity.Ref.Ref_k5Vyu5FvKSAJji6q
    | Sanity.Ref.Ref_QCU9R8H2ZSYHMVyG
    | Sanity.Ref.Ref_QeYQE36bKNk5Ek3h
    | Sanity.Ref.Ref_rPFkJPDKkYI0Xta2
    | Sanity.Ref.Ref_yWR0dMzsP9coG52t
    | Sanity.Ref.Ref_ZiNhj4mOzPuCcbQO
  )[];
}
namespace Sanity.Ref {
  type Ref_a4MZof3feiNmLrIx =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_UPJEHksTn48gjbkT>[];
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
        featuredImage?: Sanity.Ref.Ref_bZK63420Q8ROEe84;
        seo?: Sanity.Ref.Ref_ptLcUb4MTQdUhruh;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_t9VBtQg6DD42teol>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_bZK63420Q8ROEe84 = {
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
  type Ref_c2M5gPix8ipd6YNW = {
    header: string;
    points: {
      text?: string;
      title?: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_cSsfzq1tEL7ceZrr = {
    buttonLink: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
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
  type Ref_Dl96PagcSjIM7RxV = {
    ctas: Sanity.Ref.Ref_X5bDKLq4GF1nwycr[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_dUqK4bKD8WMrYgQJ = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_eCw1FJHHEtYKnxPN = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_emyeVQMNwp8fgz8B = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_FHt1yqzvZDxPHklX = {
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
      | Sanity.Ref.Ref_ZNPnA1QxSCzqpeGh
    )[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_hNFh2Xo4M4r1wp5M = unknown;
}
namespace Sanity.Ref {
  type Ref_I3rrBk2btj9693uh = {
    text?: (
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
      | Sanity.Ref.Ref_ZNPnA1QxSCzqpeGh
    )[];
  };
}
namespace Sanity.Ref {
  type Ref_IXvS7wYQmPaW7z1f = {
    cards: {
      header?: string;
      icon?: Sanity.Ref.Ref_XOVxc7YCUWndwIy6;
      iconColor: Sanity.Ref.Ref_WYr16L5bYOyN54OH;
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
  type Ref_k5Vyu5FvKSAJji6q = {
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
      icon?: Sanity.Ref.Ref_XOVxc7YCUWndwIy6;
      subtitle?: string;
      title: string;
    }[];
  };
}
namespace Sanity.Ref {
  type Ref_KhCPU7Kx9R1mJQcD = {
    cards: Sanity.Ref.Ref_17rXIQcQInDmQ2rt[];
  };
}
namespace Sanity.Ref {
  type Ref_lXVGJay1yZQfuF4Z = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_yAgYDi2M4pm4Tj6Z>;
  };
}
namespace Sanity.Ref {
  type Ref_muhfvHrwIVIYHZjM = string | null;
}
namespace Sanity.Ref {
  type Ref_nyLvDsSGJ2TzkTnM = string | null;
}
namespace Sanity.Ref {
  type Ref_pBUCDucgDlSVbOkk = {
    title: string;
    url: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
  };
}
namespace Sanity.Ref {
  type Ref_pO0imP8oKpFSRaAt = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_eCw1FJHHEtYKnxPN;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_yJRAIKB9agyyQoVb;
  };
}
namespace Sanity.Ref {
  type Ref_ptLcUb4MTQdUhruh = {
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
  type Ref_QCU9R8H2ZSYHMVyG = {
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
  type Ref_QeYQE36bKNk5Ek3h = {
    bgColor: string;
    bgImage: string;
    innerBlocks: (
      | Sanity.Ref.Ref_4feD07F4Ar5Zfe0A
      | Sanity.Ref.Ref_5fkpf5MHx5ah2bZs
      | Sanity.Ref.Ref_FHt1yqzvZDxPHklX
      | Sanity.Ref.Ref_I3rrBk2btj9693uh
      | Sanity.Ref.Ref_IXvS7wYQmPaW7z1f
      | Sanity.Ref.Ref_KhCPU7Kx9R1mJQcD
      | Sanity.Ref.Ref_Sa0Tygxjzsyxfa85
      | Sanity.Ref.Ref_UquP8I5VmgHrkmzr
    )[];
    text?: (
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
      | Sanity.Ref.Ref_ZNPnA1QxSCzqpeGh
    )[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_rPFkJPDKkYI0Xta2 = {
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
  type Ref_Sa0Tygxjzsyxfa85 = {
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
  type Ref_t9VBtQg6DD42teol =
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
  type Ref_UPJEHksTn48gjbkT =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_UPJEHksTn48gjbkT>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_UquP8I5VmgHrkmzr = {
    cards: {
      header?: string;
      icon?: Sanity.Ref.Ref_XOVxc7YCUWndwIy6;
      iconColor: Sanity.Ref.Ref_WYr16L5bYOyN54OH;
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
  type Ref_VePTwatg76ErdCeO = {
    buttonLink: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
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
  type Ref_WYr16L5bYOyN54OH = string;
}
namespace Sanity.Ref {
  type Ref_X5bDKLq4GF1nwycr = {
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
    linkUrl: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
    shape: string;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_XFf5MGv2HVJCWRjX = unknown;
}
namespace Sanity.Ref {
  type Ref_XNlKWoc2PAcCCPBV = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
    };
    hideTeaserDesktop?: boolean;
    hideTeaserMobile?: boolean;
    navigationLinkGroups: {
      navigationLinks: Sanity.Ref.Ref_pBUCDucgDlSVbOkk[];
      title?: string;
      titlelink: Sanity.Ref.Ref_lXVGJay1yZQfuF4Z;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_a4MZof3feiNmLrIx>;
  };
}
namespace Sanity.Ref {
  type Ref_XOVxc7YCUWndwIy6 = string;
}
namespace Sanity.Ref {
  type Ref_yAgYDi2M4pm4Tj6Z =
    | {
        _id: string;
        _type: "page";
        hero?: Sanity.Ref.Ref_cSsfzq1tEL7ceZrr;
        homeHeroThreeUp?: Sanity.Ref.Ref_1SuiepHYAa9LpHpz;
        pageBuilder?: Sanity.Ref.Ref_8sKfDLBXRvcwygq1;
        pageHero?: Sanity.Ref.Ref_VePTwatg76ErdCeO;
        parent?: Sanity.Reference<Sanity.Ref.Ref_yAgYDi2M4pm4Tj6Z>;
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
  type Ref_yJRAIKB9agyyQoVb = {
    darkMuted?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
    darkVibrant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
    dominant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
    lightMuted?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
    lightVibrant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
    muted?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
    vibrant?: Sanity.Ref.Ref_dUqK4bKD8WMrYgQJ;
  };
}
namespace Sanity.Ref {
  type Ref_yWR0dMzsP9coG52t = {
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
  type Ref_ZiNhj4mOzPuCcbQO = {
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
  type Ref_ZNPnA1QxSCzqpeGh = {
    link: string;
    text: string;
  };
}
