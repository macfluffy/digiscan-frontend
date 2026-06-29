<script setup lang="ts">
import { RouterLink } from 'vue-router';

</script>

<template>
    <footer>
        <section class="footer flex-container flex-rows" id="footer-menus">
            <section class= "footer flex-container flex-columns" id="cards-footer">
                <h6>Cards</h6>
                <ul class="footer-links">
                    <li>Advanced Search</li>
                    <li><RouterLink to="/sets">Sets</RouterLink></li>
                    <li>Random Card</li>
                </ul>
            </section>

            <section class="footer flex-container flex-columns" id="account-footer">
                <h6>Account</h6>
                <ul class="footer-links">
                    <li>Your Account</li>
                    <li>Register</li>
                    <li>Your Decks</li>
                    <li>Your Match History</li>
                </ul>
            </section>

            <section class="footer flex-container flex-columns" id="digiscan-footer">
                <h6>Digiscan</h6>
                <ul class="footer-links">
                    <li>Terms of Service</li>
                    <li>Privacy Policy</li>
                    <li>API Documentation</li>
                </ul>
            </section>
        </section>

        <section class="footer" id="footer-text">
            <p>Digiscan is an unofficial fan-made project and is not affiliated with Bandai or any of the mentioned trademarks.</p>
            <p>Any images or text taken from the cards are not a product of Digiscan and are the copyrighted products of their producers and owners.</p>
            <p>This site was designed for both personal and to satisfy enthusiasm for the Digimon Card Game.</p>
        </section>

    </footer>
</template>

<style scoped src="./footer.css" />