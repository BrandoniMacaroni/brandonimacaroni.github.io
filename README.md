
# Flatiron Phase 1 Project

This is my website I built called "BORED". It uses the bored api to suggest activities based on which category you select.




## Design Choice

The color scheme is made up of my favorite color, pink, and the website design is inspired by 2010's material design.
## Screenshots

![App Screenshot](https://i.imgur.com/FVmdsHS.png)


## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| White | ![#FFFFFF](https://via.placeholder.com/10/FFFFFF?text=+) #FFFFFF |
| Pink | ![#FFD7D7](https://via.placeholder.com/10/FFD7D7?text=+) #FFD7D7 |



## API Reference

#### Get all items

```http
  GET http://www.boredapi.com/api/
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `api_key` | `string` | **None**. Your API key |

#### Get item

```http
  GET http://www.boredapi.com/api/activity?type=${activityType}
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `id`      | `string` | **Required**. Id of item to fetch |




## Authors

- [@BrandoniMacaroni](https://github.com/BrandoniMacaroni)

