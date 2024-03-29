import { auto, dark, light } from '../lightyAndDark';
import { useAppSelector } from '../reduxHook';

export function useTheme() {
  const { rTheme } = useAppSelector((state) => state.app);
  return !rTheme ? light : rTheme === 'dark' ? dark : light;
}
