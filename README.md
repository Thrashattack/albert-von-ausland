<h2 align='center'>Albert von Ausland</h2>

<p align='center'>
  For those who are not Germans living in Berlin and are tired of not getting an appointment in that place that we all know
</p>

<p align='center'>
  <img align='center' src="https://github.com/Thrashattack/albert-von-ausland/assets/23486776/a7ebc286-6959-413b-aabc-a7ba9d9aa016">
</p>



## A nice guy

It's a bot, still... Can help you to get that (in)famous appointment

When an appointment is found (No error messages are displayed), it will play a very fun, loud, and nice Brazilian Funk.

Please turn your speakers on and let it loud.

## Config (.env)

> RETRY_INTERVAL

Time in milliseconds between each retry: _5000_

> TARGET_URL

The Start page URL (append _?lang=en_ to make sure it's in english)

> CITIZENSHIP

Your contry name in english: _Brazil_


> NUMBER_OF_PEOPLE

As it is in the site options: _one person_

> LIVING_ALONE

_true_ or _false_ (The second selector for number of familly members is not implemented. PR's appreciated)

> DESIRED_SERVICE

As it is in the site options: _Extend a residence title_

> PURPOSE

As it is in the site options: _Economic activity_

> TYPE_OF_APPLICATION

As it is in the site options: _EU Blue Card / Blaue Karte EU (sect. 18b para. 2)_


## Install & Run

```bash 
  yarn install
```

```bash 
  yarn immigration:start
```

## Dependencies

- You must have vlc installed to be able to play the sound

### Mac

``` bash
  brew install vlc
```

### Linux (Check your distro package manager)

``` bash
  sudo snap install vlc
```

### Windows

Download some executable and install it. You should use WSL.
