# Albert von Ausland

![albert-einstein](https://github.com/Thrashattack/albert-von-ausland/assets/23486776/a7ebc286-6959-413b-aabc-a7ba9d9aa016)


- For those who are not Germans living in Berlin and are tired of not getting an appointment in that place that we all know


## A nice guy

- It's a bot, still... Can help you to get that (in)famous appointment


- When an appointment is found (No error messages are displayed), it will play a very fun, loud, and nice Brazilian Funk.
- Please turn your speakers on and let it loud.

## Config (.env)

> RETRY_INTERVAL: Time in milliseconds between each retry

> TARGET_URL: The Start page URL (append ?lang=en to make sure it's in english)

> CITIZENSHIP: Your contry name in english
> NUMBER_OF_PEOPLE: As it is in the site options (one person)
> LIVING_ALONE: true or false
> DESIRED_SERVICE: As it is in the site options (Extend a residence title)
> PURPOSE: As it is in the site options (Economic activity)
> TYPE_OF_APPLICATION: As it is in the site options (EU Blue Card / Blaue Karte EU (sect. 18b para. 2))

> NO_APPOINTMENTS_MESSAGE: The error message displayed when no appoints are found


## Install & Run

- yarn install
- yarn immigration:start

## Dependencies

- You must have vlc installed to be able to play the sound

### Mac

- brew install vlc

### Linux (Check your distro package manager)

- sudo snap install vlc

### Windows

- Download some executable and install it. You should use WSL.
