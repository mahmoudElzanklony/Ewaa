<template>
    <div class="listing-details-info">
        <inertia-link href="#">
            <div class="image">
                <img :src="'/images/sales/'+image">
                <p>
                    <span><i class="ri-image-line"></i></span>
                    <span>{{ number_of_images }}</span>
                </p>
            </div>
            <p><strong>{{ info }}</strong></p>
            <p>{{ address }}</p>
            <p>
                <span>{{ price }}</span>
                <span v-if="$page.props.lang == 'ar'">جنيه</span>
                <span v-else>EGY</span>
            </p>
        </inertia-link>
    </div>
</template>

<script>
export default {
    name: "ListingPostComponent",
    props:['image','number_of_images','info','address','price'],
}
</script>

<style lang="scss" scoped>
@import "resources/sass/variables";
.listing-details-info {
    border: 1px solid #ddd;
    border-radius: 8px;
    margin-bottom: 15px;
    overflow: hidden;
    .image {
        position: relative;
        img {
            width: 100%;
        }
        p {
            position: absolute;
            display: flex;
            align-items: center;
            background-color: #2624244d;
            bottom: 0px;
            span {
                color: white;
            }
        }
    }
    a {
        > p {
            padding: 4px 8px;
        }

        > p:first-of-type {
            strong {
                color: $dark_gray;
            }
        }

        > p:nth-of-type(2) {
            color: $dark_gray;;
        }

        > p:nth-of-type(3) {
            span {
                color: $main_color;
                font-weight: bold;
            }
        }
    }

}

.ar{
    .listing-details-info {
        .image {
            p {
                right: 0px;
                span {
                    margin-left: 5px;
                }
            }
        }
    }
}

.en{
    .ar{
        .listing-details-info {
            .image {
                p {
                    left: 0px;
                    span {
                        margin-right: 5px;
                    }
                }
            }
        }
    }
}

</style>
