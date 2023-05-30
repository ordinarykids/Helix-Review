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
          name: Sanity.Ref.Ref_3hiXxAvmc2jhp7ZG;
          slug: Sanity.Ref.Ref_P7KZ9cujRAlb5UAZ;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_ZPVnuGBdqzGKhTo7;
          slug: Sanity.Ref.Ref_ZCKboksdviqQYDM5;
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
            ctaLink: {
              title: Sanity.Ref.Ref_Xdr4dtqxiRAtfchO;
              url: {
                externalUrl: Sanity.Ref.Ref_Ls9KznD8H0YqrbCu;
                link: Sanity.Ref.Ref_zRhvB6INrjDAen6s;
              };
            }[];
            navigationLinkGroups: {
              navigationLinks: {
                title: Sanity.Ref.Ref_Ls9KznD8H0YqrbCu;
                url: {
                  externalUrl: Sanity.Ref.Ref_wUv9Ce3XOXrl06UC;
                  link: Sanity.Ref.Ref_OcegKoMj9J4FkjY4;
                };
              };
              title: Sanity.Ref.Ref_Xdr4dtqxiRAtfchO;
              titlelink: {
                externalUrl: Sanity.Ref.Ref_Ls9KznD8H0YqrbCu;
                link: Sanity.Ref.Ref_zRhvB6INrjDAen6s;
              };
            }[];
            teaser: {
              _type: Sanity.Ref.Ref_z4rX4VZDn6jMFNeS;
              image: {
                aspectRatio: Sanity.Ref.Ref_3nMtDF8X59ug9Uad;
                blurHash: Sanity.Ref.Ref_uGbH11sF8PnXnMLL;
                height: Sanity.Ref.Ref_3nMtDF8X59ug9Uad;
                url: Sanity.Ref.Ref_68Vzqj5bpivrHWEf;
                width: Sanity.Ref.Ref_3nMtDF8X59ug9Uad;
              };
              slug: Sanity.Ref.Ref_GARPWd0mn5WSjAri;
              title: Sanity.Ref.Ref_z4rX4VZDn6jMFNeS;
            }[];
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
        categories?: Sanity.Reference<Sanity.Ref.Ref_C34zMALhcpDK8KI8>[];
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
        featuredImage?: Sanity.Ref.Ref_CNKfstmePE4HSuXo;
        seo?: Sanity.Ref.Ref_HEFkdm9UlwaxyC4G;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_gqeFaTELhyJNFt16>[];
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
        parent?: Sanity.Reference<Sanity.Ref.Ref_C34zMALhcpDK8KI8>;
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
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_2YhP3jakQ6PwnB5d>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_7sHIK5qqugjjXL6D;
          title: string;
        }[];
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationLink =
    | {
        title: string;
        url: Sanity.Ref.Ref_Wi2FApyJs5mOvJKU;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type NavigationSectionPanel =
    | {
        ctaLink?: {
          title?: string;
          url: Sanity.Ref.Ref_Wi2FApyJs5mOvJKU;
        };
        navigationLinkGroups: {
          navigationLinks: {
            title: string;
            url: Sanity.Ref.Ref_Wi2FApyJs5mOvJKU;
          }[];
          title?: string;
          titlelink: Sanity.Ref.Ref_Wi2FApyJs5mOvJKU;
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_NX0r1JtbFmBgC8Mz>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        parent?: Sanity.Reference<Sanity.Ref.Ref_2YhP3jakQ6PwnB5d>;
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
        source?: Sanity.Ref.Ref_WOYRbWF2ueEEKFMR;
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
        metadata?: Sanity.Ref.Ref_OYmlaaTLw5MoNel1;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_WOYRbWF2ueEEKFMR;
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
        dimensions?: Sanity.Ref.Ref_KHB9QrpL1xmlsxsV;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_nRcE4I9HGAhbX4Rv;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
        darkVibrant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
        dominant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
        lightMuted?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
        lightVibrant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
        muted?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
        vibrant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
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
namespace Sanity.Ref {
  type Ref_2YhP3jakQ6PwnB5d =
    | {
        _id: string;
        _type: "page";
        parent?: Sanity.Reference<Sanity.Ref.Ref_2YhP3jakQ6PwnB5d>;
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
  type Ref_3hiXxAvmc2jhp7ZG = string | null;
}
namespace Sanity.Ref {
  type Ref_3nMtDF8X59ug9Uad = unknown;
}
namespace Sanity.Ref {
  type Ref_68Vzqj5bpivrHWEf = unknown;
}
namespace Sanity.Ref {
  type Ref_7sHIK5qqugjjXL6D = {
    ctaLink?: {
      title?: string;
      url: Sanity.Ref.Ref_Wi2FApyJs5mOvJKU;
    };
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_Wi2FApyJs5mOvJKU;
      }[];
      title?: string;
      titlelink: Sanity.Ref.Ref_Wi2FApyJs5mOvJKU;
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_NX0r1JtbFmBgC8Mz>;
  };
}
namespace Sanity.Ref {
  type Ref_C34zMALhcpDK8KI8 =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_C34zMALhcpDK8KI8>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_CNKfstmePE4HSuXo = {
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
  type Ref_GARPWd0mn5WSjAri = unknown;
}
namespace Sanity.Ref {
  type Ref_gqeFaTELhyJNFt16 =
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
  type Ref_HEFkdm9UlwaxyC4G = {
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
  type Ref_KHB9QrpL1xmlsxsV = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_Ls9KznD8H0YqrbCu = unknown;
}
namespace Sanity.Ref {
  type Ref_mgoTRLlJh3Cv4HJT = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_nRcE4I9HGAhbX4Rv = {
    darkMuted?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
    darkVibrant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
    dominant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
    lightMuted?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
    lightVibrant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
    muted?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
    vibrant?: Sanity.Ref.Ref_mgoTRLlJh3Cv4HJT;
  };
}
namespace Sanity.Ref {
  type Ref_NX0r1JtbFmBgC8Mz =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_C34zMALhcpDK8KI8>[];
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
        featuredImage?: Sanity.Ref.Ref_CNKfstmePE4HSuXo;
        seo?: Sanity.Ref.Ref_HEFkdm9UlwaxyC4G;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_gqeFaTELhyJNFt16>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_OcegKoMj9J4FkjY4 = unknown;
}
namespace Sanity.Ref {
  type Ref_OYmlaaTLw5MoNel1 = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_KHB9QrpL1xmlsxsV;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_nRcE4I9HGAhbX4Rv;
  };
}
namespace Sanity.Ref {
  type Ref_P7KZ9cujRAlb5UAZ = unknown;
}
namespace Sanity.Ref {
  type Ref_uGbH11sF8PnXnMLL = unknown;
}
namespace Sanity.Ref {
  type Ref_Wi2FApyJs5mOvJKU = {
    externalUrl?: string;
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_2YhP3jakQ6PwnB5d>;
  };
}
namespace Sanity.Ref {
  type Ref_WOYRbWF2ueEEKFMR = {
    id?: string;
    name?: string;
    url?: string;
  };
}
namespace Sanity.Ref {
  type Ref_wUv9Ce3XOXrl06UC = unknown;
}
namespace Sanity.Ref {
  type Ref_Xdr4dtqxiRAtfchO = string | null;
}
namespace Sanity.Ref {
  type Ref_z4rX4VZDn6jMFNeS = unknown;
}
namespace Sanity.Ref {
  type Ref_ZCKboksdviqQYDM5 = unknown;
}
namespace Sanity.Ref {
  type Ref_ZPVnuGBdqzGKhTo7 = string | null;
}
namespace Sanity.Ref {
  type Ref_zRhvB6INrjDAen6s = unknown;
}
