# Fetch Pitch
Fetch Pitch allows you to easily sonify your applications that use the fetch API. Each network request binds to a ToneJS instrument with a specified callback.

## Usage

### `pitch(instrument, callback, resource, opts)`
### `new FetchPitch(instrument, callback)`
- `instrument`: any ToneJS instrument
- `callback`: what you want the instrument to do. This must be a function where the instrument argument is called by the method` (see example below)
- `resource`: fetch resource (url, or Request) like `https://example.com`
- `opts`: options you'd normally pass to a fetch request.

`yarn add fetch-pitch` or `npm i fetch-pitch`

#### Standalone with `pitch` function
```
import { pitch } from 'fetch-pitch'
import * as Tone from 'tone'

const synth = new Tone.Synth().toDestination()
const callback = instrument => instrument.triggerAttachRelease("C4", "4n")

pitch(synth, callback, "http://localhost:1312/my-api", {
    method: 'GET
}).then(res => {
    console.log(res.statusCode)
})
```

#### Use with existing fetch requests using the `FetchPitch.fetch` method

```
// Before
const someAsyncNetworkCall = async () => {

    const response = await fetch("http://localhost:1312/my-api", {
        method: 'GET
    })

}
```
```
// After (using same synth and callback as above)

import { FetchPitch } from 'fetch-pitch'
const myPitch = new FetchPitch(synth, callback);

const someAsyncNetworkCall = async () => {

    const response = await myPitch.fetch("http://localhost:1312/my-api", {
        method: 'GET
    })

}
```