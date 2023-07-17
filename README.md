# Vue3 FreshChat

[![Version](https://img.shields.io/npm/v/vue3-freshchat.svg)](https://www.npmjs.com/package/vue3-freshchat)

Vue3 FreshChat is a Vue 3 package that enables easy integration of the FreshChat widget into your Vue 3 applications. FreshChat is a customer messaging platform that allows you to engage with your website visitors and provide real-time support.

## Installation

You can install the Vue3 FreshChat package using npm or yarn:

```bash
npm install vue3-freshchat
```
or
```bash
yarn add vue3-freshchat
```

## Usage

To use Vue3 FreshChat, follow these steps:

1. Import the `FreshChat` component in your Vue application:

```javascript
import FreshChat from "vue3-freshchat";
```

2. Add the `FreshChat` component to your template, passing the necessary props:

```html
<FreshChat source="//eu.fw-cdn.com/123123/123123.js" :id="123" first_name="Jan" last_name="Pieter" email="test@asd.nl" :extraProperties="{'cf_client':'test'}" />
```

3. Customize the template and scoped styles as needed.

## Props

The `FreshChat` component accepts the following props:

- `source` (required): The source URL of the FreshChat script.

- `id`: The user's external ID.

- `first_name`: The user's first name.

- `last_name`: The user's last name.

- `email`: The user's email address.

- `extraProperties`: Additional properties for the user as a key-value object.

## Example

```html
<template>
    <FreshChat source="//eu.fw-cdn.com/123123/123123.js" :id="123" first_name="Jan" last_name="Pieter" email="test@asd.nl" :extraProperties="{'cf_client':'test'}" />
</template>
```

## License

Vue3 FreshChat is licensed under the [MIT License](https://github.com/example/repo/blob/master/LICENSE).
