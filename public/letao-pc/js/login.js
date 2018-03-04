;(function () { 

    $(function () { 
        //表单验证
        $('form').bootstrapValidator({
            feedbackIcons: {
                valid: 'glyphicon glyphicon-ok',
                invalid: 'glyphicon glyphicon-remove',
                validating: 'glyphicon glyphicon-refresh'
            },
            fields: {
                username: {
                    // message: '用户名验证失败',
                    validators: {
                        notEmpty: {
                            message: '用户名不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 18,
                            message: '用户名长度必须在2到18位之间'
                        },
                        regexp: {
                            regexp: /^[a-zA-Z0-9_]+$/,
                            message: '用户名只能包含大写、小写、数字和下划线'
                        },
                         callback: {
                            message:'用户名或密码错误(callback)'
                          }
                    }
                    
                },
              
                password: {
                    validators: {
                        notEmpty: {
                            message: '密码不能为空'
                        },
                        stringLength: {
                            min: 2,
                            max: 6,
                            message: '密码必须在到6位之间'
                        },
                        callback: {
                            message:'用户名或密码错误(callback:密码)'
                          }
                    }
                  
                 
                }         
            }
         
        });

       //请求账户验证
       $("form").on("success.form.bv", function (e) {
        //阻止浏览器默认行为
        e.preventDefault();
        $.ajax({
          type:'post',
          url:"/employee/employeeLogin",
          data: $("form").serialize(),
          dataType:'json',
          success:function (info) {
            if(info.error==1000){
                $('form').data('bootstrapValidator').updateStatus("username",  "INVALID", 'callback');
            }
            if(info.error==1001){
                $('form').data('bootstrapValidator').updateStatus("password",  "INVALID", 'callback');
            }

            if(info.success){
                window.location.href='index.html';
            }
              
               
          }
        })
      
      


    })
    //重置表单
    $('form  button[type=reset]').on('click',function () { 
        // $("form").data('bootstrapValidator').destroy();
        // $('_form').data('bootstrapValidator', null);
        $("form").data("bootstrapValidator").resetForm(true);
     })






     })//入口函数












 })()