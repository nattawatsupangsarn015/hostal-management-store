<template>
    <section class="hidden-md-and-up hidden-xs-only">
        <div class="header-image">
            <img class="image-content" src="../../assets/header.jpg" alt="header-image" />
            <div class="header-text">
                Hostel Management
            </div>
        </div>
    </section>
</template>

<style scoped>

.header-image {
    position: relative;
    width: 100%;
    height: 15rem;
}

.image-content {
    object-fit: cover;
    height: 100%;
    width: 100%;
}

.header-text {
    position: absolute;
    top: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,0.5);
    font-size: 2rem;
    color: #E67E22;
    font-weight: 700;
    display: flex;
    justify-content: center;
    align-items: center;
    user-select: none;
}

</style>