class NotFoundPage {
  async render() {
    return `
      <section>
        <h2 class="section-title">Page Not Found (404)</h2>
      </section>
    `;
  }

  async afterRender() {
    // Do nothing
  }
}

export default NotFoundPage;
