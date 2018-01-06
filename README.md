# React Native Hr Plus

Hr component which you can use for awesome login/register screens

![PremiumReact](https://i.imgur.com/Wx054hF.png)

## Installation
NPM
```
npm install react-native-hr-plus --save
```

Yarn
```
yarn add react-native-hr-plus
```

## Usage
```
import Hr from "react-native-hr-plus";

<Hr color="white" width={1}>
    <Text style={styles.textWithDivider}>OR</Text>
</Hr>
```

Your text styles
```
textWithDivider: {
    color: "white",
    marginVertical: 10,
    paddingHorizontal: 10
}
```


## Properties

| Prop  | Default  | Type | Description |
| :------------ |:---------------:| :---------------:| :-----|
| color | "white" | `color` | Color for the border on both sides |
| width | 1 | `number` | Width of the hr |

## Contributing

If you would like to improve on this module feel free to do so