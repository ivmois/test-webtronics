import { fb, git, linkedin, twitter } from './icons';

const icons = {
  fb,
  git,
  linkedin,
  twitter,
};

export type nameIcons = keyof typeof icons;

interface IIcon {
  name: nameIcons;
}

export function Icon({ name }: IIcon) {
  return <span>{icons[name]}</span>;
}
