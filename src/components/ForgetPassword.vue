<template>
  <div class="page-wrapper full-page">
    <div class="page-content d-flex align-items-center justify-content-center">
      <div class="row w-100 mx-0 auth-page">
        <div class="col-md-8 col-xl-6 mx-auto">
          <div class="card">
            <div class="row">
              <div class="col-md-4 pr-md-0">
                <div class="auth-left-wrapper"></div>
              </div>
              <div class="col-md-8 pl-md-0">
                <div class="auth-form-wrapper px-4 py-5">
                  <a href="#" class="noble-ui-logo d-block mb-2"
                    >Noble<span>UI</span></a
                  >
                  <h5 class="text-muted font-weight-normal mb-4">
                    Welcome back! Log in to your account.
                  </h5>
                  <form class="forms-sample" method="POST" action="">
                    <div class="form-group">
                      <label for="email">E-Mail Address</label>
                      <input
                        id="email"
                        type="email"
                        class="form-control"
                        name="email"
                        value=""
                        required
                        autocomplete="email"
                        autofocus
                      />
                    </div>
                    
                    <div class="form-check form-check-flat form-check-primary">
                      <label class="form-check-label">
                        <input
                          type="checkbox"
                          class="form-check-input"
                          name="remember"
                          id="remember"
                        />
                        Remember Me
                      </label>
                    </div>
                    <div class="mt-3">
                      <button
                        type="submit"
                        class="btn btn-primary mr-2 mb-2 mb-md-0 text-white"
                      >
                        Send
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  mounted() {
    console.log("Component mounted.");
  },
};
</script>




