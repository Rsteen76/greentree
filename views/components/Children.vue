<template>
    <div class="about">
        <b-container class="p-4" bg-variant="secondary">
        <b-card-group deck>
        <b-card title="Card Title"
            img-src="https://picsum.photos/600/300/?image=25"
            img-alt="Image"
            img-top
            tag="article"
            style="max-width: 80rem; max-height: 85vh;"
            class="text center">
        <h4 slot="header">Childen's Ministry</h4>
        <p class="card-text">
        Some quick example text to build on the card title and make up the bulk of the card's content.
        </p>
        <b-button href="#" variant="primary">Go somewhere</b-button>
        </b-card>
        </b-card-group>
        </b-container>
    </div>
</template>


<script>
export default {
  name: "Children"
};
</script>