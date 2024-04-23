import { mdiMapMarker, mdiAccount, mdiCloseCircle, mdiCalendar } from '@mdi/js'

type IconType = typeof mdiMapMarker | typeof mdiAccount | typeof mdiCloseCircle | typeof mdiCalendar| undefined;

export const SetIcon: Record<string, IconType> = {
  undefined,
  $vuetify: '$vuetify',
  'mdi-map-marker': mdiMapMarker,
  'mdi-account': mdiAccount,
  'mdi-close-circle': mdiCloseCircle,
  'mdi-calendar': mdiCalendar
}
