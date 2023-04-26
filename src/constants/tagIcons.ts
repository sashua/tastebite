import { IconType } from 'react-icons';
import {
  RiFlashlightFill,
  RiHandCoinFill,
  RiHashtag,
  RiHeartPulseFill,
  RiOpenArmFill,
  RiSeedlingFill,
  RiTempColdFill,
} from 'react-icons/ri';

export const defaultTagIcon = RiHashtag;

export const defaultTagIcons: Record<string, IconType> = {
  'sairy-free': RiOpenArmFill,
  'egg-free': RiOpenArmFill,
  'gluten-free': RiOpenArmFill,
  healthy: RiHeartPulseFill,
  'low carb': RiFlashlightFill,
  vegan: RiSeedlingFill,
  vegetarian: RiSeedlingFill,
  freezable: RiTempColdFill,
  'easily doubled': RiHandCoinFill,
  'easily halved': RiHandCoinFill,
};
