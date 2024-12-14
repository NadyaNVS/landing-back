import type { Schema, Struct } from '@strapi/strapi';

export interface BlocksCardQuote extends Struct.ComponentSchema {
  collectionName: 'components_blocks_card_quotes';
  info: {
    displayName: 'Card Quote';
  };
  attributes: {
    card: Schema.Attribute.Component<'elements.card', true>;
  };
}

export interface BlocksContentItems extends Struct.ComponentSchema {
  collectionName: 'components_blocks_content_items';
  info: {
    description: '';
    displayName: 'Content Items';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    imageRight: Schema.Attribute.Boolean;
    item: Schema.Attribute.Component<'elements.item', true>;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksCta extends Struct.ComponentSchema {
  collectionName: 'components_blocks_ctas';
  info: {
    description: '';
    displayName: 'CTA';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    subHeading: Schema.Attribute.Text;
  };
}

export interface BlocksFaQs extends Struct.ComponentSchema {
  collectionName: 'components_blocks_fa_qs';
  info: {
    displayName: 'FAQs';
  };
  attributes: {
    questions: Schema.Attribute.Relation<'oneToMany', 'api::question.question'>;
  };
}

export interface BlocksHero extends Struct.ComponentSchema {
  collectionName: 'components_blocks_heroes';
  info: {
    description: '';
    displayName: 'Hero';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksSectionHeading extends Struct.ComponentSchema {
  collectionName: 'components_blocks_section_headings';
  info: {
    displayName: 'Section Heading';
  };
  attributes: {
    heading: Schema.Attribute.String;
    preHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface BlocksYtVideo extends Struct.ComponentSchema {
  collectionName: 'components_blocks_yt_videos';
  info: {
    displayName: 'YT Video';
  };
  attributes: {
    description: Schema.Attribute.Text;
    title: Schema.Attribute.String;
    videoId: Schema.Attribute.String;
    videoURL: Schema.Attribute.String;
  };
}

export interface ElementsCard extends Struct.ComponentSchema {
  collectionName: 'components_elements_cards';
  info: {
    displayName: 'Card';
  };
  attributes: {
    heading: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subHeading: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsFollow extends Struct.ComponentSchema {
  collectionName: 'components_elements_follows';
  info: {
    displayName: 'Follow';
  };
  attributes: {
    heading: Schema.Attribute.String;
    socialLink: Schema.Attribute.Component<'elements.social-link', true>;
  };
}

export interface ElementsItem extends Struct.ComponentSchema {
  collectionName: 'components_elements_items';
  info: {
    displayName: 'Item';
  };
  attributes: {
    heading: Schema.Attribute.String;
    icon: Schema.Attribute.String;
    text: Schema.Attribute.Text;
  };
}

export interface ElementsLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface ElementsLogoLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_logo_links';
  info: {
    displayName: 'Logo Link';
  };
  attributes: {
    href: Schema.Attribute.String;
    image: Schema.Attribute.Media<'images'>;
    text: Schema.Attribute.String;
  };
}

export interface ElementsSocialLink extends Struct.ComponentSchema {
  collectionName: 'components_elements_social_links';
  info: {
    displayName: 'Social Link';
  };
  attributes: {
    external: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    href: Schema.Attribute.String;
    text: Schema.Attribute.String;
  };
}

export interface LayoutFooter extends Struct.ComponentSchema {
  collectionName: 'components_layout_footers';
  info: {
    description: '';
    displayName: 'Footer';
  };
  attributes: {
    colOneLinks: Schema.Attribute.Component<'elements.link', true>;
    colTwoLinks: Schema.Attribute.Component<'elements.link', true>;
    description: Schema.Attribute.Text;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
    socialLinks: Schema.Attribute.Component<'elements.follow', false>;
  };
}

export interface LayoutTopNav extends Struct.ComponentSchema {
  collectionName: 'components_layout_top_navs';
  info: {
    displayName: 'Top Nav';
  };
  attributes: {
    cta: Schema.Attribute.Component<'elements.link', false>;
    link: Schema.Attribute.Component<'elements.link', true>;
    logoLink: Schema.Attribute.Component<'elements.logo-link', false>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'blocks.card-quote': BlocksCardQuote;
      'blocks.content-items': BlocksContentItems;
      'blocks.cta': BlocksCta;
      'blocks.fa-qs': BlocksFaQs;
      'blocks.hero': BlocksHero;
      'blocks.section-heading': BlocksSectionHeading;
      'blocks.yt-video': BlocksYtVideo;
      'elements.card': ElementsCard;
      'elements.follow': ElementsFollow;
      'elements.item': ElementsItem;
      'elements.link': ElementsLink;
      'elements.logo-link': ElementsLogoLink;
      'elements.social-link': ElementsSocialLink;
      'layout.footer': LayoutFooter;
      'layout.top-nav': LayoutTopNav;
    }
  }
}
