import React from "react";
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList
} from "react-native";

import { icons, images, SIZES, COLORS, FONTS } from '../constants'

const Home = ({ navigation }) => {


    const initialCurrentLocation = {
        streetName: "Madina Estate",
        gps: {
            latitude: 5.667817778288444,
                longitude: -0.15532131390777215,
        }
    }

    const categoryData = [
        {
            id: 1,
            name: "Pre-Order",
            icon: icons.preorder,
        },
        {
            id: 2,
            name: "Under 20",
            icon: icons.under20,
        },
        {
            id: 3,
            name: "Breakfast",
            icon: icons.breakfast,
        },
        {
            id: 4,
            name: "Local",
            icon: icons.local,
        },
        {
            id: 5,
            name: "Rice",
            icon: icons.rice_bowl,
        },
        {
            id: 6,
            name: "Noodles",
            icon: icons.noodle,
        },
        {
            id: 7,
            name: "Drinks",
            icon: icons.drink,
        },
        {
            id: 8,
            name: "Pastries",
            icon: icons.pastries,
        },
        {
            id: 9,
            name: "Pizza",
            icon: icons.pizza,
        },
        {
            id: 10,
            name: "Extras",
            icon: icons.drink,
        },

    ]

    // price rating
    const affordable = 1
    const fairPrice = 2
    const expensive = 3

    const restaurantData = [
        {
            id: 1,
            name: "Home Made",
            rating: 4.8,
            categories: [4],
            priceRating: fairPrice,
            photo: images.agatha,
            duration: "20 - 30 min",
            location: {
                latitude: 1.5347282806345879,
                longitude: 110.35632207358996,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Kwasi"
            },
            menu: [
                {
                    menuId: 1,
                    name: "•	Okro stew and Banku",
                    photo: images.banku,
                    description: "2 Balls of banku + Smoked salmon + Meat",
                    price: 15
                },
                {
                    menuId: 2,
                    name: "•	Banku and okro soup ",
                    photo: images.banku,
                    description: "2 Balls of banku + Smoked Tilapia + Meat",
                    price: 15
                },
                {
                    menuId: 3,
                    name: "•	Fufu with lightsoup",
                    photo: images.fufu,
                    description: "2 pound of fufu + goat meat + chicken,fish",
                    price: 10
                }
            ]
        },
        {
            id: 2,
            name: "Agatha's Perfect",
            rating: 4.8,
            categories: [4],
            priceRating: affordable,
            photo: images.agatha,
            duration: "15 - 20 min",
            location: {
                latitude: 1.556306570595712,
                longitude: 110.35504616746915,
            },
            courier: {
                avatar: images.avatar_2,
                name: "Jackson"
            },
            menu: [
                {
                    menuId: 4,
                    name: "•	Face-the-wall(Kokonte)",
                    photo: images.kokonte,
                    description: "Palm nut soup + meat + fish",
                    price: 15
                },
                {
                    menuId: 5,
                    name: "•	Face-the-wall(Kokonte)",
                    photo: images.kokonte,
                    description: "Groundnut soup + fish + beef",
                    price: 20
                },
                {
                    menuId: 6,
                    name: "•	Fufu with light soup ",
                    photo: images.fufu,
                    description: "Chicken + fish + egg",
                    price: 10
                },
                {
                    menuId: 7,
                    name: "•	Banku with okro",
                    photo: images.banku,
                    description: "Fish + meat",
                    price: 10
                }
            ]
        },
        {
            id: 3,
            name: "The Palace Bar Restuarant",
            rating: 4.8,
            categories: [4],
            priceRating: expensive,
            photo: images.palace,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5238753474714375,
                longitude: 110.34261833833622,
            },
            courier: {
                avatar: images.avatar_3,
                name: "Kwame"
            },
            menu: [
                {
                    menuId: 8,
                    name: "•	Banku with Ewopkle + grilled tilapia",
                    photo: images.banku,
                    description: "Banku with Ewopkle + grilled tilapia",
                    price: 20
                }
            ]
        },
        {
            id: 4,
            name: "Akos Kitchen",
            rating: 4.8,
            categories: [1,2,6],
            priceRating: affordable,
            photo: images.akos,
            duration: "10 - 15 min",
            location: {
                latitude: 1.5578068150528928,
                longitude: 110.35482523764315,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Kwasi"
            },
            menu: [
                {
                    menuId: 9,
                    name: "Indomie Noodles ",
                    photo: images.noodles,
                    description: "•	Fried Indomie Noodles + Egg",
                    calories: 100,
                    price: 10
                }
            ]
        },
        {
            id: 5,
            name: "Casa Bella",
            rating: 4.8,
            categories: [5],
            priceRating: fairPrice,
            photo: images.casa,
            duration: "15 - 20 min",
            location: {
                latitude: 5.667817778288444,
                longitude: -0.15532131390777215,
            },
            courier: {
                avatar: images.avatar_4,
                name: "Nana"
            },
            menu: [
                {
                    menuId: 10,
                    name: "•	Fried rice grilled chicken ",
                    photo: images.friedrice,
                    description: "•	Fried rice + grilled chicken ",
                    price: 15
                },
                {
                    menuId: 11,
                    name: "•	Jollof rice grilled chicken ",
                    photo: images.jollof,
                    description: "Jollof rice + grilled chicken ",
                    price: 15
                },
                {
                    menuId: 12,
                    name: "•	Assorted Fried rice grilled chicken",
                    photo: images.assortedfried,
                    description: "Assorted Fried rice + grilled chicken + mutton",
                    price: 20
                },
                {
                    menuId: 13,
                    name: "•	Assorted Jollof rice grilled chicken",
                    photo: images.assortedjollof,
                    description: "Assorted Jollof rice + grilled chicken + mutton",
                    price: 20
                },

            ]
        },
        {

            id: 6,
            name: "Pork in Park",
            rating: 4.9,
            categories: [1,10],
            priceRating: fairPrice,
            photo: images.porkinpacl,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 12,
                    name: "Pork and yam chips",
                    photo: images.porkinpark,
                    description: "Pork and yam chips",
                    price: 25
                }
            ]

        },

        {

            id: 7,
            name: "Daffy's Juice",
            rating: 4.9,
            categories: [1,7,2],
            priceRating: affordable,
            photo: images.daffy,
            duration: "20 - 25 min",
            location: {
                latitude: 1.5573478487252896,
                longitude: 110.35568783282145,
            },
            courier: {
                avatar: images.avatar_1,
                name: "Jessie"
            },
            menu: [
                {
                    menuId: 13,
                    name: "Daffy's Pinapple Juice",
                    photo: images.daffy,
                    description: "Pinapple + Ginger + Lime",
                    price: 3
                },
                {
                    menuId: 14,
                    name: "Daffy's Orange Juice",
                    photo: images.daffy,
                    description: "Orange + Ginger + Lime",
                    price: 3
                },
                
            ]

        },


    ]

    const [categories, setCategories] = React.useState(categoryData)
    const [selectedCategory, setSelectedCategory] = React.useState(null)
    const [restaurants, setRestaurants] = React.useState(restaurantData)
    const [currentLocation, setCurrentLocation] = React.useState(initialCurrentLocation)


    function onSelectCategory(category) {
        //filter restaurant
        let restaurantList = restaurantData.filter(a => a.categories.includes(category.id))

        setRestaurants(restaurantList)

        setSelectedCategory(category)
    }

    function getCategoryNameById(id) {
        let category = categories.filter(a => a.id == id)

        if (category.length > 0)
            return category[0].name

        return ""
    }

    function renderHeader() {
        return (
            <View style={{ flexDirection: 'row', height: 50 }}>
                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingLeft: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.nearby}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>

                <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                    <View
                        style={{
                            width: '70%',
                            height: "100%",
                            backgroundColor: COLORS.lightGray3,
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: SIZES.radius
                        }}
                    >
                        <Text style={{ ...FONTS.h3 }}>{currentLocation.streetName}</Text>
                    </View>
                </View>

                <TouchableOpacity
                    style={{
                        width: 50,
                        paddingRight: SIZES.padding * 2,
                        justifyContent: 'center'
                    }}
                >
                    <Image
                        source={icons.orders}
                        resizeMode="contain"
                        style={{
                            width: 30,
                            height: 30
                        }}
                    />
                </TouchableOpacity>
            </View>
        )
    }

    function renderMainCategories() {
        const renderItem = ({ item }) => {
            return (
                <TouchableOpacity
                    style={{
                        padding: SIZES.padding,
                        paddingBottom: SIZES.padding * 2,
                        backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white,
                        borderRadius: SIZES.radius,
                        alignItems: "center",
                        justifyContent: "center",
                        marginRight: SIZES.padding,
                        ...styles.shadow
                    }}
                    onPress={() => onSelectCategory(item)}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 25,
                            alignItems: "center",
                            justifyContent: "center",
                            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.lightGray
                        }}
                    >
                        <Image
                            source={item.icon}
                            resizeMode="contain"
                            style={{
                                width: 30,
                                height: 30
                            }}
                        />
                    </View>

                    <Text
                        style={{
                            marginTop: SIZES.padding,
                            color: (selectedCategory?.id == item.id) ? COLORS.white : COLORS.black,
                            ...FONTS.body5
                        }}
                    >
                        {item.name}
                    </Text>
                </TouchableOpacity>
            )
        }

        return (
            <View style={{ padding: SIZES.padding * 2 }}>
                <Text style={{ ...FONTS.h1 }}>Main</Text>
                <Text style={{ ...FONTS.h1 }}>Categories</Text>

                <FlatList
                    data={categories}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={item => `${item.id}`}
                    renderItem={renderItem}
                    contentContainerStyle={{ paddingVertical: SIZES.padding * 2 }}
                />
            </View>
        )
    }

    function renderRestaurantList() {
        const renderItem = ({ item }) => (
            <TouchableOpacity
                style={{ marginBottom: SIZES.padding * 2 }}
                onPress={() => navigation.navigate("Restaurant", {
                    item,
                    currentLocation
                })}
            >
                {/* Image */}
                <View
                    style={{
                        marginBottom: SIZES.padding
                    }}
                >
                    <Image
                        source={item.photo}
                        resizeMode="cover"
                        style={{
                            width: "100%",
                            height: 200,
                            borderRadius: SIZES.radius
                        }}
                    />

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            height: 50,
                            width: SIZES.width * 0.3,
                            backgroundColor: COLORS.white,
                            borderTopRightRadius: SIZES.radius,
                            borderBottomLeftRadius: SIZES.radius,
                            alignItems: 'center',
                            justifyContent: 'center',
                            ...styles.shadow
                        }}
                    >
                        <Text style={{ ...FONTS.h4 }}>{item.duration}</Text>
                    </View>
                </View>

                {/* Restaurant Info */}
                <Text style={{ ...FONTS.body2 }}>{item.name}</Text>

                <View
                    style={{
                        marginTop: SIZES.padding,
                        flexDirection: 'row'
                    }}
                >
                    {/* Rating */}
                    <Image
                        source={icons.star}
                        style={{
                            height: 20,
                            width: 20,
                            tintColor: COLORS.primary,
                            marginRight: 10
                        }}
                    />
                    <Text style={{ ...FONTS.body3 }}>{item.rating}</Text>

                    {/* Categories */}
                    <View
                        style={{
                            flexDirection: 'row',
                            marginLeft: 10
                        }}
                    >
                        {
                            item.categories.map((categoryId) => {
                                return (
                                    <View
                                        style={{ flexDirection: 'row' }}
                                        key={categoryId}
                                    >
                                        <Text style={{ ...FONTS.body3 }}>{getCategoryNameById(categoryId)}</Text>
                                        <Text style={{ ...FONTS.h3, color: COLORS.darkgray }}> . </Text>
                                    </View>
                                )
                            })
                        }

                        {/* Price */}
                        {
                            [1, 2, 3].map((priceRating) => (
                                <Text
                                    key={priceRating}
                                    style={{
                                        ...FONTS.body3,
                                        color: (priceRating <= item.priceRating) ? COLORS.black : COLORS.darkgray
                                    }}
                                >₵</Text>
                            ))
                        }
                    </View>
                </View>
            </TouchableOpacity>
        )

        return (
            <FlatList
                data={restaurants}
                keyExtractor={item => `${item.id}`}
                renderItem={renderItem}
                contentContainerStyle={{
                    paddingHorizontal: SIZES.padding * 2,
                    paddingBottom: 30
                }}
            />
        )
    }

    return (
        <SafeAreaView style={styles.container}>
            {renderHeader()}
            {renderMainCategories()}
            {renderRestaurantList()}
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.lightGray4
    },
    shadow: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 1,
    }
})

export default Home