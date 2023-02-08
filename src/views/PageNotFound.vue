<template>
<section class="page-404-area">
            <div class="container">
                <div class="row">
                    <div class="col-md-8 offset-md-2 text-center">
                        <h2>404</h2>
                        <p>We apologize but the page you are looking for cannot be found. We strive to ensure no kids are left behind, and this includes making sure our website is easy to navigate. If you need help finding what you are looking for, please contact us directly </p>
                        <!-- <a href="index.html" class="btn-1">Go Back To Homepage</a> -->
                        <router-link :to="{ name: 'home' }" class="btn-1">Go Back To Homepage</router-link>
                    </div>
                </div>
            </div>
        </section>
</template>