import { breakPoints } from './constants';

export function mediaPhone(content) {
  return `@media screen and (min-width: ${breakPoints.MOB}px) {
    ${content}
  }`;
}

export function mediaTablet(content) {
  return `@media screen and (min-width: ${breakPoints.TAB}px) {
    ${content}
  }`;
}

export function mediaDesktop(content) {
  return `@media screen and (min-width: ${breakPoints.DESK}px) {
    ${content}
  }`;
}

export function mediaQHD(content) {
  return `@media screen and (min-width: ${breakPoints.QHD}px) {
    ${content}
  }`;
}

export function mediaMaxPhone(content) {
  return `@media screen and (max-width: ${breakPoints.TAB}px) {
    ${content}
  }`;
}

export function mediaMaxHD(content) {
  return `@media screen and (min-width: ${breakPoints.MaxHD}px) {
    ${content}
  }`;
}
