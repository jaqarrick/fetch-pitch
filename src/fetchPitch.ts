import { Instrument, InstrumentOptions } from 'tone/build/esm/instrument/Instrument'
import pitch from './pitch'

class FetchPitch {
  private readonly instrument: Instrument<InstrumentOptions>
  private readonly callback: (instrument: Instrument<InstrumentOptions>) => void
  constructor(
    instrument: Instrument<InstrumentOptions>,
    callback: (instrument: Instrument<InstrumentOptions>) => void,
  ) {
    this.instrument = instrument
    this.callback = callback
  }

  async fetch(resource: string | Request, opts: RequestInit) {
    return pitch(this.instrument, this.callback, resource, opts)
  }
}

export default FetchPitch
