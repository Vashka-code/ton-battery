<template>
  <base-container>
    <div class="footer">
      <ul class="footer-list">
        <li class="footer-list__item footer-list__item--title">Company</li>
        <li class="footer-list__item">
          <a class="footer-list__link" href="https://tonkeeper.com/" target="_blank">
            Official Ton website
          </a>
        </li>
      </ul>
      <ul class="footer-list">
        <li class="footer-list__item footer-list__item--title">Developer</li>
        <li class="footer-list__item">
          <a
            class="footer-list__link"
            href="https://www.linkedin.com/in/ivan-trushko-8510b920a/"
            target="_blank"
          >
            My linkedin
          </a>
        </li>
        <li class="footer-list__item">
          <a class="footer-list__link" href="https://github.com/Vashka-code" target="_blank">
            My github
          </a>
        </li>
      </ul>
    </div>
  </base-container>
</template>
<style lang="scss" scoped>
.footer {
  display: flex;
  gap: 100px;
}
.footer-list {
  list-style: none;
  padding: 0;

  &__item {
    &:nth-child(2) {
      margin-top: 20px;
    }

    &--title {
      color: var(--title-color);
      font-size: 18px;
      font-weight: 500;
    }
  }

  &__link {
    color: inherit;
  }
}
</style>
