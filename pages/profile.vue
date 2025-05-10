<template>
<section class="profile">
    <div class="container">
        <div class="profile__data card">
            <div class="profile__data-top">
                <p class="title-medium">Акаунт і дані</p>
                <div class="btn--icon btn--icon-light">
                    <img src="/public/img/svg/icons/pencil.svg" alt="edit profile data">
                </div>
            </div>
            <div class="profile__data-info">
                <div class="profile__data-pfp img-wrap img-wrap--cover">
                    <img :src="userObj.pfpSrc.default" alt="vanya">
                </div>
                <div class="profile__data-username img-wrap">
                    <p class="title-large">{{ userObj.profileName.default }}</p>
                </div>
            </div>
            <div class="profile__data-inputs">
                <InputComponent
                    placeholder="+38 (063) 111 11 11"
                    iconSrc="/public/img/svg/icons/phone.svg"
                />
                <InputComponent
                    placeholder="testemail@gmail.com"
                    iconSrc="/public/img/svg/icons/phone.svg"
                />
            </div>
        </div>
        <div class="profile__btns">
            <p class="title-medium">Швидкі дії</p>
            <NuxtLink to="/liked" class="profile__btns-item">
                <div class="img-wrap">
                    <img src="/public/img/svg/icons/heart.svg" alt="" />
                </div>
                <p class="body-large">Обрані</p>
                <div class="img-wrap profile__btns-item__chevron">
                    <img src="/public/img/svg/icons/chevron-right.svg" alt="" />
                </div>
            </NuxtLink>
            <NuxtLink to="/reservations" class="profile__btns-item">
                <div class="img-wrap">
                    <img src="/public/img/svg/icons/list.svg" alt="" />
                </div>
                <p class="body-large">Мої бронювання</p>
                <div class="img-wrap profile__btns-item__chevron">
                    <img src="/public/img/svg/icons/chevron-right.svg" alt="" />
                </div>
            </NuxtLink>
            <NuxtLink to="/faq" class="profile__btns-item">
                <div class="img-wrap">
                    <img src="/public/img/svg/icons/doc.svg" alt="" />
                </div>
                <p class="body-large">Часті питання та інше</p>
                <div class="img-wrap profile__btns-item__chevron">
                    <img src="/public/img/svg/icons/chevron-right.svg" alt="" />
                </div>
            </NuxtLink>
            <NuxtLink class="profile__btns-item">
                <div class="img-wrap">
                    <img src="/public/img/svg/icons/pkg.svg" alt="" />
                </div>
                <p class="body-large">В бізнес-профіль</p>
                <div class="img-wrap profile__btns-item__chevron">
                    <img src="/public/img/svg/icons/chevron-right.svg" alt="" />
                </div>
            </NuxtLink>
        </div>
        <div class="profile__logout">
            <div class="btn btn--transparent btn--transparent--red">
                <p class="label-large">Видалити акаунт</p>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3 5H4.66667M4.66667 5H18M4.66667 5L4.66667 16.6667C4.66667 17.1087 4.84226 17.5326 5.15482 17.8452C5.46738 18.1577 5.89131 18.3333 6.33333 18.3333H14.6667C15.1087 18.3333 15.5326 18.1577 15.8452 17.8452C16.1577 17.5326 16.3333 17.1087 16.3333 16.6667V5.00001M7.16667 5.00001V3.33334C7.16667 2.89131 7.34226 2.46739 7.65482 2.15483C7.96738 1.84227 8.39131 1.66667 8.83333 1.66667H12.1667C12.6087 1.66667 13.0326 1.84227 13.3452 2.15483C13.6577 2.46739 13.8333 2.89131 13.8333 3.33334V5.00001" stroke="#FF4615" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <NuxtLink to="/login" class="btn btn--primary btn--full-width">
                <p class="label-large">Вийти</p>
                <svg width="21" height="20" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8 17.5H4.66667C4.22464 17.5 3.80072 17.3244 3.48816 17.0118C3.17559 16.6993 3 16.2754 3 15.8333V4.16667C3 3.72464 3.17559 3.30072 3.48816 2.98816C3.80072 2.67559 4.22464 2.5 4.66667 2.5H8M13.8333 14.1667L18 10M18 10L13.8333 5.83333M18 10H8" stroke="#F8F8FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>

            </NuxtLink>
        </div>
    </div>
</section>
</template>

<script setup>
const userObj = {
    profileName: {
        type: String,
        default: 'Іван Стович'
    },
    carName: {
        type: String,
        default: 'Daewoo Lanos'
    },
    pfpSrc: {
        type: String,
        default: 'https://placecats.com/bella/300/200'
    }
}
</script>

<style lang="scss">
.profile {
    @media screen and (min-width: 1024px) {
        .container {
            display: flex;
            gap: 2.8rem;
            flex-wrap: wrap;
            justify-content: flex-end;
            .profile__data {
                flex-shrink: 0;
                flex-grow: 1;
                flex-basis: calc(50% - 1.4rem);
            }
            .profile__btns {
                flex-grow: 1;
                flex-shrink: 0;
                flex-basis: calc(50% - 1.4rem);
            }
            .profile__logout {
                flex-grow: 0;
                flex-shrink: 1;
            }
        }
    }
    &__data {
        @media screen and (min-width: 1024px) {
            padding: 2.8rem 1.6rem;
        }
        &-top {
            display: flex;
            justify-content: space-between;
            width: 100%;
            @media screen and (min-width: 1024px) {
                margin-bottom: 2rem;
            }
            .title-medium {
                margin: 0;
            }
            .btn--icon {
                padding: 0;
                height: 4.2rem;
                width: 4.2rem;
            }
        }
        &-info {
            display: flex;
            gap: 0.8rem;
            .title-large {
                font-weight: 500;
                margin: 0;
            }
        }
        &-pfp {
            width: 6.4rem;
            height: 6.4rem;
            border-radius: var(--round-full);
        }
        &-inputs {
            margin-top: 2rem;
            display: flex;
            flex-direction: column;
            gap: 1.6rem;
            @media screen and (min-width: 1024px) {
                gap: 2.8rem;
            }
        }
    }
    &__btns {
        margin-top: 4rem;
        @media screen and (min-width: 1024px) {
            margin-top: 0rem;
            margin-bottom: 2.6rem;
        }
        .title-medium {
            padding-bottom: 2rem;
            margin: 0;
        }
        &-item {
            background-color: var(--neutrals-100);
            padding: 1.5rem 1.6rem;
            display: flex;
            gap: 0.8rem;
            box-shadow: 0px 4px 16px 0px #0000000F;
            margin-top: 0.8rem;
            border-radius: 1.2rem;
            color: var(--primary-1000);
            text-decoration: none;
            &:first-child {
                margin-top: 0;
            }
            &:last-child {
                margin-top: 2rem;
            }
            .img-wrap {
                width: 2rem;
            }
            p {
                margin: 0;
            }
            &__chevron {
                margin-left: auto;
                margin-right: 1rem;
            }
            @media screen and (min-width: 1024px) {
            }
        }
    }
    &__logout {
        margin-top: 4rem;
        display: flex;
        flex-direction: column;
        gap: 1.6rem;
    }
}
</style>