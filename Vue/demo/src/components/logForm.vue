<template>
    <div class="login-form">
        <div class="g-form">
            <div class="g-form-line">
                <span class="g-form-label">用户名：</span>
                <div class="g-form-input">
                    <input type="text" placeholder="请输入用户名" v-model="usernameModel">
                </div>
                <span class="g-form-error">{{userErrors.errorText}}</span>
            </div>
            <div class="g-form-line">
                <span class="g-form-label">密码：</span>
                <div class="g-form-input">
                    <input type="password" placeholder="请输入密码" v-model="passwordModel">
                </div>
                <span class="g-form-error">{{passwordErrors.errorText}}</span>
            </div>
            <div class="g-form-line">
                <div class="g-form-btn">
                    <a class="button" @click="onLogin">登录</a>
                </div>
            </div>
            <p> {{submitErrorText}} </p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            usernameModel: '',
            passwordModel: '',
            submitErrorText: ''
        }
    },
    computed: {
        userErrors() {
            let errorText, status;
            // usernameModel 更新时computed 中的该函数也同步更新？
            if(!/@/g.test(this.usernameModel)) {                
                errorText = '不包含@';
                status = false;
            } else {                
                errorText = '';
                status = true;
            }
            if(!this.usernameFlag) {
                errorText = '';
                this.usernameFlag = true;
            }
            return {
                errorText,
                status
            }
        },
        passwordErrors() {
            let errorText, status;
            if(!/^\w{1,6}$/g.test(this.passwordModel)) {                
                errorText = '密码不是1-6位';
                status = false;
            } else {                
                errorText = '';
                status = true;
            }
            if(!this.passwordFlag) {
                errorText = '';
                this.passwordFlag = true;
            }
            return {
                errorText,
                status
            }
        },

    },
    methods: {
        onLogin() {
            if(!this.userErrors.status || !this.passwordErrors.status) {
                this.submitErrorText = '请完善选项！'
            } else {
                this.submitErrorText = '';
                // console.log('uploading')
                this.$http.get('api/login')
                .then((res) => {
                    this.$emit('has-log', res.data)
                },(error) => {
                    console.log('sth wrong')
                })
            }
        }
    }
}
</script>

<style scoped>

</style>
