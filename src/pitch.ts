import { Instrument, InstrumentOptions } from 'tone/build/esm/instrument/Instrument'

const pitch = async (
  instrument: Instrument<InstrumentOptions>,
  callback: (instrument: Instrument<InstrumentOptions>) => void,
  resource: string | Request,
  opts: RequestInit,
): Promise<Response> => {
  return await new Promise((resolve, reject) => {
    fetch(resource, opts)
      .then((response) => {
        callback(instrument)
        resolve(response)
      })
      .catch((err) => reject(err))
  })
}

export default pitch
