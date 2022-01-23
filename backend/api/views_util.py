def obj_to_post(obj):
    # convert object to dict

    post = dict(vars(obj))
    # convert post dict to string

    if obj.modify_dt:
        post['modify_dt'] = obj.modify_dt.strftime('%Y-%m-%d %H:%M')
    else:
        post['modify_dt'] = ''

    if obj.tags:
        post['tags'] = [tag.name for tag in obj.tags.all()]
    else:
        post['tags'] = []

    if obj.owner:
        post['owner'] = obj.owner.username
    else:
        post['owner'] = 'Anonymous'

    del post['_state']

    return post

def prev_next_post(obj):
    # 이전 포스트가 없을 경우 error가 발생할 수 있다. try-except
    try:
        prevObj = obj.get_prev()
        prevDict = {'id': prevObj.id, 'title': prevObj.title}
    except obj.DoesNotExist as e: #Post.DoesNotExist:
        prevDict = {}
    try:
        nextObj = obj.get_next()
        nextDict = {'id': nextObj.id, 'title': nextObj.title}
    except obj.DoesNotExist as e:
        nextDict = {}

    return prevDict, nextDict