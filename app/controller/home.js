const Controller = require('egg').Controller;

class HomeController extends Controller {
    async index() {
        this.ctx.body = 'Hellasasdas dasd> o world<div>asd s</div>';
        this.ctx.response.etag = "sad"

    }
    // shdofh oascascascascehich  ds sdg sdgsdg  asfasfasfasfasfihsdf
}

module.exports = HomeController;