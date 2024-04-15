import { mdiMapMarker, mdiAccount, mdiCloseCircle } from '@mdi/js'

type IconType = typeof mdiMapMarker | typeof mdiAccount | typeof mdiCloseCircle | undefined;

export const SetIcon: Record<string, IconType> = {
  undefined,
  $vuetify: '$vuetify',
  'mdi-map-marker': mdiMapMarker,
  'mdi-account': mdiAccount,
  'mdi-close-circle': mdiCloseCircle
}
