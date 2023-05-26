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
          name: Sanity.Ref.Ref_p15YwDBfwhhFddaC;
          slug: Sanity.Ref.Ref_UwIFvjIEQcnkWWIf;
        }[]
      | null;
    tags:
      | {
          name: Sanity.Ref.Ref_xZw2k0QlF6QvGbEK;
          slug: Sanity.Ref.Ref_cO1XF3P5t0Nibpya;
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
                  title: Sanity.Ref.Ref_DdVqSJ9Nm2HdEfeg;
                  url: {
                    externalUrl: Sanity.Ref.Ref_EQflxgbnLSY0mehG;
                    link: Sanity.Ref.Ref_5xNIYQOITkOu1jae;
                  };
                };
                title: Sanity.Ref.Ref_JQVvHw5TNCwHto0c;
              }[];
            }[];
            teaser: Sanity.Ref.Ref_HwNDR2XhZCkW94W2;
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
        categories?: Sanity.Reference<Sanity.Ref.Ref_29XIOU8g7z1QRfQZ>[];
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
        featuredImage?: Sanity.Ref.Ref_gOppiQIOphgUU6U8;
        seo?: Sanity.Ref.Ref_v7NBqSHazvtWnmqd;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_hwZP5XhjSjKsV2Hj>[];
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
        parent?: Sanity.Reference<Sanity.Ref.Ref_29XIOU8g7z1QRfQZ>;
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
    internalLink?: Sanity.Reference<Sanity.Ref.Ref_d1rZrWZLwXJ9GmLE>;
  };
}
namespace Sanity.Default.Schema {
  type MainNavigation =
    | {
        _id: string;
        _type: "mainNavigation";
        navigationSections?: {
          navigationSectionPanel?: Sanity.Ref.Ref_Em4cA23r0Lo0NrjO;
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
              url: Sanity.Ref.Ref_JRdk124ckw4JZzO9;
            }[];
            title?: string;
          }[];
        }[];
        teaser?: Sanity.Reference<Sanity.Ref.Ref_BBYaDyL7GnwX7cpf>;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type Page =
    | {
        _id: string;
        _type: "page";
        parent?: Sanity.Reference<Sanity.Ref.Ref_d1rZrWZLwXJ9GmLE>;
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
        source?: Sanity.Ref.Ref_yq1DLJOIeRDxXnbA;
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
        metadata?: Sanity.Ref.Ref_16Ko12NHYzJMUBmY;
        mimeType?: string;
        originalFilename?: string;
        path?: string;
        sha1hash?: string;
        size?: number;
        source?: Sanity.Ref.Ref_yq1DLJOIeRDxXnbA;
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
        dimensions?: Sanity.Ref.Ref_gzLsMT6l4OYfNhRP;
        hasAlpha?: boolean;
        isOpaque?: boolean;
        location?: {
          _type: "geopoint";
          alt: number;
          lat: number;
          lng: number;
        };
        lqip?: string;
        palette?: Sanity.Ref.Ref_IQNCNkrMQGzJeoAm;
      }
    | undefined;
}
namespace Sanity.Default.Schema {
  type SanityImagePalette =
    | {
        darkMuted?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
        darkVibrant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
        dominant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
        lightMuted?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
        lightVibrant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
        muted?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
        vibrant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
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
  type Ref_16Ko12NHYzJMUBmY = {
    blurHash?: string;
    dimensions?: Sanity.Ref.Ref_gzLsMT6l4OYfNhRP;
    hasAlpha?: boolean;
    isOpaque?: boolean;
    location?: {
      _type: "geopoint";
      alt: number;
      lat: number;
      lng: number;
    };
    lqip?: string;
    palette?: Sanity.Ref.Ref_IQNCNkrMQGzJeoAm;
  };
}
namespace Sanity.Ref {
  type Ref_29XIOU8g7z1QRfQZ =
    | {
        _id: string;
        _type: "category";
        name?: string;
        parent?: Sanity.Reference<Sanity.Ref.Ref_29XIOU8g7z1QRfQZ>;
        slug?: {
          _type: "slug";
          current?: string;
          source?: string;
        };
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_5xNIYQOITkOu1jae = unknown;
}
namespace Sanity.Ref {
  type Ref_BBYaDyL7GnwX7cpf =
    | {
        _id: string;
        _type: "blogPost";
        categories?: Sanity.Reference<Sanity.Ref.Ref_29XIOU8g7z1QRfQZ>[];
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
        featuredImage?: Sanity.Ref.Ref_gOppiQIOphgUU6U8;
        seo?: Sanity.Ref.Ref_v7NBqSHazvtWnmqd;
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
        tags?: Sanity.Reference<Sanity.Ref.Ref_hwZP5XhjSjKsV2Hj>[];
        title?: string;
      }
    | undefined;
}
namespace Sanity.Ref {
  type Ref_cO1XF3P5t0Nibpya = unknown;
}
namespace Sanity.Ref {
  type Ref_d1rZrWZLwXJ9GmLE = Sanity.Ref.Ref_d1rZrWZLwXJ9GmLE;
}
namespace Sanity.Ref {
  type Ref_DdVqSJ9Nm2HdEfeg = unknown;
}
namespace Sanity.Ref {
  type Ref_Em4cA23r0Lo0NrjO = {
    columns: {
      navigationLinkGroups: {
        navigationLinks: {
          title: string;
          url: Sanity.Ref.Ref_JRdk124ckw4JZzO9;
        }[];
        title?: string;
      }[];
    }[];
    teaser?: Sanity.Reference<Sanity.Ref.Ref_BBYaDyL7GnwX7cpf>;
  };
}
namespace Sanity.Ref {
  type Ref_EQflxgbnLSY0mehG = unknown;
}
namespace Sanity.Ref {
  type Ref_gOppiQIOphgUU6U8 = {
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
  type Ref_gzLsMT6l4OYfNhRP = {
    aspectRatio?: number;
    height?: number;
    width?: number;
  };
}
namespace Sanity.Ref {
  type Ref_HwNDR2XhZCkW94W2 = {
    navigationLinkGroups: {
      navigationLinks: {
        title: string;
        url: Sanity.Ref.Ref_JRdk124ckw4JZzO9;
      }[];
      title?: string;
    }[];
  }[];
}
namespace Sanity.Ref {
  type Ref_hwZP5XhjSjKsV2Hj =
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
  type Ref_IQNCNkrMQGzJeoAm = {
    darkMuted?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
    darkVibrant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
    dominant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
    lightMuted?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
    lightVibrant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
    muted?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
    vibrant?: Sanity.Ref.Ref_PB1OM6Xga2Lfgdie;
  };
}
namespace Sanity.Ref {
  type Ref_JQVvHw5TNCwHto0c = string | null;
}
namespace Sanity.Ref {
  type Ref_JRdk124ckw4JZzO9 = Sanity.Ref.Ref_JRdk124ckw4JZzO9;
}
namespace Sanity.Ref {
  type Ref_p15YwDBfwhhFddaC = string | null;
}
namespace Sanity.Ref {
  type Ref_PB1OM6Xga2Lfgdie = {
    background?: string;
    foreground?: string;
    population?: number;
    title?: string;
  };
}
namespace Sanity.Ref {
  type Ref_UwIFvjIEQcnkWWIf = unknown;
}
namespace Sanity.Ref {
  type Ref_v7NBqSHazvtWnmqd = {
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
  type Ref_xZw2k0QlF6QvGbEK = string | null;
}
namespace Sanity.Ref {
  type Ref_yq1DLJOIeRDxXnbA = {
    id?: string;
    name?: string;
    url?: string;
  };
}
