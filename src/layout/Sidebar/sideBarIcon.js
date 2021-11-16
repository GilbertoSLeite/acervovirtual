import { Icon } from '@iconify/react';
import bxHomeHeart from '@iconify/icons-eva/home-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import mapFill from '@iconify/icons-eva/map-fill';
import bulbOutline from "@iconify/icons-eva/bulb-outline";
import imageOutline from "@iconify/icons-eva/image-outline";
// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sideBarIcon = [
  {
    title: 'Principal',
    path: '/lsconsultoria/acervovirtual/home',
    icon: getIcon(bxHomeHeart)
  },
  {
    title: 'Banco de Imagens',
    path: '/lsconsultoria/acervovirtual/bancoimagens',
    icon: getIcon(imageOutline)
  },
  {
    title: 'Biblioteca Virtual',
    path: '/lsconsultoria/acervovirtual/bibliotecavirtual',
    icon: getIcon(bulbOutline)
  },
  {
    title: 'Galeria de Prefeitos',
    path: '/lsconsultoria/acervovirtual/galeriaprefeito',
    icon: getIcon(peopleFill)
  },
  {
    title: 'História da Cidade',
    path: '/lsconsultoria/acervovirtual/historiacidade',
    icon: getIcon(mapFill)
  },
];

export default sideBarIcon;