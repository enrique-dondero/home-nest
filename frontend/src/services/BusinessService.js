import API from '../helpers/api';
import moment from 'moment';

function normalizeBusiness(business) {
    let result = {
        id: business.id,
        name: business.name,
        bio: business.bio,
        score: business.score,
        categoriesNames: business.categories.map((category) => category.name),
        contacts: normalizeContacts(business.contacts),
        coverPhoto: business.cover_photo,
        comments: business.reviews ? business.reviews.map((comment) => normalizeComment(comment)) : []
    };

    result.hasContacts = (result.contacts.email || result.contacts.phone || result.contacts.website);
    result.nbComments = result.comments.length;

    return result;
}

function normalizeContacts(contacts) {
    let result = {
        phone: null,
        email: null,
        website: null,
    };

    if(!contacts) return result;

    for (const {type, value} of contacts) {
        result[type.toLowerCase()] = value;
    }

    return result;
}


function normalizeComment({id, comment, score, created_at}) {
    return {
        id,
        comment,
        score,
        createdAt: moment(created_at)
    };
}

export function getBusiness(uuid) {
    return API.get(`businesses/${uuid}`)
        .then((response) => response.data)
        .then((business) => normalizeBusiness(business))
    ;
}
