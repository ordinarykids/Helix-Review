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
<<<<<<< HEAD
          name: Sanity.Ref.Ref_MAQvmEzi79YRrJpw;
          slug: Sanity.Ref.Ref_yJijbmlsFJMpf68G;
=======
          name: Sanity.Ref.Ref_IxQHGxcvwPfrMIMx;
          slug: Sanity.Ref.Ref_YDQvcCqV998ivCra;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
        }[]
      | null;
    tags:
      | {
<<<<<<< HEAD
          name: Sanity.Ref.Ref_Tplmnd3A220ydCou;
          slug: Sanity.Ref.Ref_cjOLJpXYTo0qEcJS;
=======
          name: Sanity.Ref.Ref_q4PJO3EMyNFMzqtm;
          slug: Sanity.Ref.Ref_6rZ4HMzGlFfKuRBH;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
        }[]
      | null;
    title: string | null;
  };
}
<<<<<<< HEAD
namespace Sanity.Default.Query {
  type PageByPath = {
    partnerLogoGrid: {
      header: Sanity.Ref.Ref_0AkMbh84t5EDwRew;
      logos: {
        _key: Sanity.Ref.Ref_LWg7QWD6EVSEWbQL;
        externalLink: Sanity.Ref.Ref_LWg7QWD6EVSEWbQL;
        image: {
          alt: Sanity.Ref.Ref_VsObvdlZtyb2p6TA;
          aspectRatio: Sanity.Ref.Ref_l1NltjvlfGTDoFz1;
          blurHash: Sanity.Ref.Ref_hxMzTnTBhb1ql497;
          height: Sanity.Ref.Ref_l1NltjvlfGTDoFz1;
          src: Sanity.Ref.Ref_6eq6dI2bo3kzvTw8;
          width: Sanity.Ref.Ref_l1NltjvlfGTDoFz1;
        };
        uploadedFileURL: Sanity.Ref.Ref_6eq6dI2bo3kzvTw8;
      };
      subheader: Sanity.Ref.Ref_0AkMbh84t5EDwRew;
    };
    title: string | null;
  };
}
=======
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
namespace Sanity.Default.Schema {
  type BlogPost =
    | {
        _id: string;
        _type: "blogPost";
<<<<<<< HEAD
        categories?: Sanity.Reference<Sanity.Ref.Ref_9vgMkcC0rpUeIqfg>[];
=======
        categories?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>[];
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
        featuredImage?: Sanity.Ref.Ref_iRx0jUt2xkvAbgQa;
        seo?: Sanity.Ref.Ref_EJrIaTTPQ95Xam3G;
=======
        featuredImage?: Sanity.Ref.Ref_qX2aXcGKtRrAQIXy;
        seo?: Sanity.Ref.Ref_a4HiQLelQD5s1R6E;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
        tags?: Sanity.Reference<Sanity.Ref.Ref_yhvxRyCy8THetv9Z>[];
=======
        tags?: Sanity.Reference<Sanity.Ref.Ref_CeiSOCrybASs5AFv>[];
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Button =
    | {
        align?: string;
        buttonStyle?: string;
        link: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
        size?: string;
        text: string;
        theme?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type CardGrid =
    | {
        cards: Sanity.Ref.Ref_vFT5OeRkLCU8VyMw[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Category =
    | {
        _id: string;
        _type: "category";
        name?: string;
<<<<<<< HEAD
        parent?: Sanity.Reference<Sanity.Ref.Ref_9vgMkcC0rpUeIqfg>;
=======
        parent?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
        linkUrl: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
        shape: string;
        title?: string;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type GeometricCTAs =
    | {
        ctas: Sanity.Ref.Ref_w31G5P8pfYGFDSq3[];
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
  type Icon = string | undefined;
}
namespace Sanity.Default.Schema {
  type IconCard =
    | {
        header?: string;
        icon?: Sanity.Ref.Ref_hjMOAzgmse6xDThU;
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
<<<<<<< HEAD
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_HFIQTB7ERMIrmcxU>;
=======
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
<<<<<<< HEAD
          navigationSectionPanel?: Sanity.Ref.Ref_CTc8usBDbhEInrwV;
=======
          navigationSectionPanel?: Sanity.Ref.Ref_1yVzeaPF7rzJnfVv;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
          url: Sanity.Ref.Ref_bk5o9Re4jjD47ocL;
=======
          url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
        };
        hideTeaserDesktop?: boolean;
        hideTeaserMobile?: boolean;
        navigationLinkGroups: {
          navigationLinks: {
            title: string;
<<<<<<< HEAD
            url: Sanity.Ref.Ref_bk5o9Re4jjD47ocL;
          }[];
          title?: string;
          titlelink: Sanity.Ref.Ref_bk5o9Re4jjD47ocL;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_jHkjoNDGqTUDXXcm>;
=======
            url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
          }[];
          title?: string;
          titlelink: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_VF6GhJpVvLvO6JKc>;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
<<<<<<< HEAD
        parent?: Sanity.Reference<Sanity.Ref.Ref_HFIQTB7ERMIrmcxU>;
        partnerLogoGrid?: Sanity.Ref.Ref_TZsh7VpKel3PRLdv;
=======
        pageBuilder?: Sanity.Ref.Ref_u6y8QSbZwlQuoNa7;
        parent?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
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
        }[];
        subheader?: string;
=======
  type PageBuilder =
    | (Sanity.Ref.Ref_B8pKYUPd7Rsgr5jV | Sanity.Ref.Ref_YYBpEMCSFZvMqCsU)[]
    | undefined;
}
namespace Sanity.Default.Schema {
  type PageSection =
    | {
        innerBlocks?: (
          | Sanity.Ref.Ref_Ev1qAoiSkdmo2bqb
          | Sanity.Ref.Ref_zdzZYA3Aqo2lg5fB
        )[];
        title?: string;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
        source?: Sanity.Ref.Ref_UAHrWFZIkThBZiN8;
=======
        source?: Sanity.Ref.Ref_OFotreTHfGjYLlTV;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
        metadata?: Sanity.Ref.Ref_4vCanXtCXJKn7AGi;
=======
        metadata?: Sanity.Ref.Ref_LUmOn99EJ9hPFz4x;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
<<<<<<< HEAD
        source?: Sanity.Ref.Ref_UAHrWFZIkThBZiN8;
=======
        source?: Sanity.Ref.Ref_OFotreTHfGjYLlTV;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
        dimensions?: Sanity.Ref.Ref_hHmOZft0zujASupv;
=======
        dimensions?: Sanity.Ref.Ref_f9BPL3TO58yQZNGc;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
<<<<<<< HEAD
        palette?: Sanity.Ref.Ref_1j7I526BxCaS9U4k;
=======
        palette?: Sanity.Ref.Ref_4JD2Pfe2xSaqiNZI;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
<<<<<<< HEAD
        darkMuted?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
        darkVibrant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
        dominant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
        lightMuted?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
        lightVibrant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
        muted?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
        vibrant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
=======
        darkMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        darkVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        dominant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        lightMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        lightVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        muted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
        vibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
        link?: string;
        style?: string;
        text?: string;
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
<<<<<<< HEAD
namespace Sanity.Ref {
  type Ref_0AkMbh84t5EDwRew = string | null;
}
namespace Sanity.Ref {
  type Ref_0ocJDS2o6nMLiwoF = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_1j7I526BxCaS9U4k = {
    darkMuted?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
    darkVibrant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
    dominant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
    lightMuted?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
    lightVibrant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
    muted?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
    vibrant?: Sanity.Ref.Ref_0ocJDS2o6nMLiwoF;
  };
}
namespace Sanity.Ref {
  type Ref_4vCanXtCXJKn7AGi = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_hHmOZft0zujASupv;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_1j7I526BxCaS9U4k;
  };
}
namespace Sanity.Ref {
  type Ref_6eq6dI2bo3kzvTw8 = unknown;
}
namespace Sanity.Ref {
  type Ref_9vgMkcC0rpUeIqfg =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_9vgMkcC0rpUeIqfg>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_bk5o9Re4jjD47ocL = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_HFIQTB7ERMIrmcxU>;
  };
}
namespace Sanity.Ref {
  type Ref_cjOLJpXYTo0qEcJS = unknown;
}
namespace Sanity.Ref {
  type Ref_CTc8usBDbhEInrwV = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_bk5o9Re4jjD47ocL;
    };
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_bk5o9Re4jjD47ocL;
      }[];
      title?: string;
      titlelink: Sanity.Ref.Ref_bk5o9Re4jjD47ocL;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_jHkjoNDGqTUDXXcm>;
  };
}
namespace Sanity.Ref {
  type Ref_EJrIaTTPQ95Xam3G = {
=======
namespace Sanity.Default.Schema {
  type VideoEmbed =
    | {
        url?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_1yVzeaPF7rzJnfVv = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
    };
    hideTeaserDesktop?: boolean;
    hideTeaserMobile?: boolean;
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
      }[];
      title?: string;
      titlelink: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_VF6GhJpVvLvO6JKc>;
  };
}
namespace Sanity.Ref {
  type Ref_4JD2Pfe2xSaqiNZI = {
    darkMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    darkVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    dominant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    lightMuted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    lightVibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    muted?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
    vibrant?: Sanity.Ref.Ref_6h9MMY2vGJp9KmiC;
  };
}
namespace Sanity.Ref {
  type Ref_6h9MMY2vGJp9KmiC = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_6rZ4HMzGlFfKuRBH = unknown;
}
namespace Sanity.Ref {
  type Ref_a4HiQLelQD5s1R6E = {
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
  type Ref_HFIQTB7ERMIrmcxU =
    | {
        _id: string;
        _type: "page";
        parent?: Sanity.Reference<Sanity.Ref.Ref_HFIQTB7ERMIrmcxU>;
        partnerLogoGrid?: Sanity.Ref.Ref_TZsh7VpKel3PRLdv;
=======
  type Ref_B8pKYUPd7Rsgr5jV = {
    innerBlocks?: (
      | Sanity.Ref.Ref_Ev1qAoiSkdmo2bqb
      | Sanity.Ref.Ref_zdzZYA3Aqo2lg5fB
    )[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_CeiSOCrybASs5AFv =
    | {
        _id: string;
        _type: "tag";
        name?: string;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
<<<<<<< HEAD
  type Ref_hHmOZft0zujASupv = {
=======
  type Ref_dMaEi65jLMcSvh7k =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_Ev1qAoiSkdmo2bqb = {
    cards: Sanity.Ref.Ref_vFT5OeRkLCU8VyMw[];
  };
}
namespace Sanity.Ref {
  type Ref_f9BPL3TO58yQZNGc = {
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
<<<<<<< HEAD
  type Ref_hxMzTnTBhb1ql497 = unknown;
}
namespace Sanity.Ref {
  type Ref_iRx0jUt2xkvAbgQa = {
=======
  type Ref_hjMOAzgmse6xDThU = string;
}
namespace Sanity.Ref {
  type Ref_IxQHGxcvwPfrMIMx = string | null;
}
namespace Sanity.Ref {
  type Ref_LUmOn99EJ9hPFz4x = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_f9BPL3TO58yQZNGc;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_4JD2Pfe2xSaqiNZI;
  };
}
namespace Sanity.Ref {
  type Ref_NUuVfHd6c88BnAOE = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
  };
}
namespace Sanity.Ref {
  type Ref_OFotreTHfGjYLlTV = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_q4PJO3EMyNFMzqtm = string | null;
}
namespace Sanity.Ref {
  type Ref_qX2aXcGKtRrAQIXy = {
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
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
<<<<<<< HEAD
=======
  };
}
namespace Sanity.Ref {
  type Ref_u6y8QSbZwlQuoNa7 = (
    | Sanity.Ref.Ref_B8pKYUPd7Rsgr5jV
    | Sanity.Ref.Ref_YYBpEMCSFZvMqCsU
  )[];
}
namespace Sanity.Ref {
  type Ref_VF6GhJpVvLvO6JKc =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_dMaEi65jLMcSvh7k>[];
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
        featuredImage?: Sanity.Ref.Ref_qX2aXcGKtRrAQIXy;
        seo?: Sanity.Ref.Ref_a4HiQLelQD5s1R6E;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_CeiSOCrybASs5AFv>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_vFT5OeRkLCU8VyMw = {
    header?: string;
    icon?: Sanity.Ref.Ref_hjMOAzgmse6xDThU;
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
  type Ref_w31G5P8pfYGFDSq3 = {
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
    linkUrl: Sanity.Ref.Ref_NUuVfHd6c88BnAOE;
    shape: string;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_xYwoqYqmLIHn3hwB =
    | {
        _id: string;
        _type: "page";
        pageBuilder?: Sanity.Ref.Ref_u6y8QSbZwlQuoNa7;
        parent?: Sanity.Reference<Sanity.Ref.Ref_xYwoqYqmLIHn3hwB>;
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
  type Ref_YDQvcCqV998ivCra = unknown;
}
namespace Sanity.Ref {
  type Ref_YYBpEMCSFZvMqCsU = {
    ctas: Sanity.Ref.Ref_w31G5P8pfYGFDSq3[];
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_zdzZYA3Aqo2lg5fB = {
    url?: string;
>>>>>>> 128e8affc5d6be5fba5c7a8c5b1313eb22e3a820
  };
}
namespace Sanity.Ref {
  type Ref_jHkjoNDGqTUDXXcm =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_9vgMkcC0rpUeIqfg>[];
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
        featuredImage?: Sanity.Ref.Ref_iRx0jUt2xkvAbgQa;
        seo?: Sanity.Ref.Ref_EJrIaTTPQ95Xam3G;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_yhvxRyCy8THetv9Z>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_l1NltjvlfGTDoFz1 = unknown;
}
namespace Sanity.Ref {
  type Ref_LWg7QWD6EVSEWbQL = unknown;
}
namespace Sanity.Ref {
  type Ref_MAQvmEzi79YRrJpw = string | null;
}
namespace Sanity.Ref {
  type Ref_Tplmnd3A220ydCou = string | null;
}
namespace Sanity.Ref {
  type Ref_TZsh7VpKel3PRLdv = {
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
    }[];
    subheader?: string;
  };
}
namespace Sanity.Ref {
  type Ref_UAHrWFZIkThBZiN8 = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_VsObvdlZtyb2p6TA = unknown;
}
namespace Sanity.Ref {
  type Ref_yhvxRyCy8THetv9Z =
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
  type Ref_yJijbmlsFJMpf68G = unknown;
}
